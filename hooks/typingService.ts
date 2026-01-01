const DEFAULT_KEY_STROKE_MAX_VARIANCE_MS = 70;
const DEFAULT_KEY_STROKE_MIN_TIME_MS = 50;

type Options = {
  keyStrokeMaxVarianceMs?: number;
  keyStrokeMinTimeMs?: number;
  onChange: (value: string) => void;
  onEnd?: (value: string) => void;
};

type State = 'stale' | 'typing';

export class TypingService {
  private currentTarget = '';
  private currentText = '';
  private state: State = 'stale';
  private timeouts: number[] = [];

  constructor(private options: Options) {}

  public delete({ startDelayMs = 0 }) {
    this.type({
      startDelayMs,
      text: '',
    });
  }

  public reset() {
    this.currentTarget = '';
    this.currentText = '';
    this.options.onChange(this.currentText);
    this.state = 'stale';
    this.timeouts.forEach((timeout) => {
      window.clearTimeout(timeout);
    });
    this.timeouts = [];
    return;
  }

  public type({
    startDelayMs,
    text,
  }: {
    startDelayMs?: number;
    text: string;
  }) {
    this.currentTarget = text;
    this.state = 'typing';

    this.timeouts.push(
      window.setTimeout(() => {
        this.tick();
      }, startDelayMs),
    );
  }

  private addNextCharacter() {
    this.currentText = this.currentTarget.slice(
      0,
      this.currentText.length + 1,
    );
    this.options.onChange(this.currentText);
  }

  private getTime() {
    return (
      (this.options.keyStrokeMinTimeMs ||
        DEFAULT_KEY_STROKE_MIN_TIME_MS) +
      Math.random() *
        (this.options.keyStrokeMaxVarianceMs ||
          DEFAULT_KEY_STROKE_MAX_VARIANCE_MS)
    );
  }

  private removeLastCharacter() {
    this.currentText = this.currentText.slice(0, -1);
    this.options.onChange(this.currentText);
  }

  private scheduleNextTick() {
    this.timeouts.push(
      window.setTimeout(() => {
        this.tick();
      }, this.getTime()),
    );
  }

  private tick() {
    if (this.state === 'stale') return;

    if (this.currentText === this.currentTarget) {
      this.state = 'stale';
      this.options.onEnd?.(this.currentText);
      return;
    }

    if (this.currentTarget.startsWith(this.currentText)) {
      this.addNextCharacter();
      this.scheduleNextTick();
      return;
    }

    this.removeLastCharacter();
    this.scheduleNextTick();
    return;
  }
}
