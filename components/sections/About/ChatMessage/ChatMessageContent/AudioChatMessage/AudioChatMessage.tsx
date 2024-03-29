import React, { useRef, useState } from 'react';

import { Button } from 'reakit/Button';

import { LoadingIcon } from '~/components/icons/Loading';
import { PauseIcon } from '~/components/icons/Pause';
import { PlayIcon } from '~/components/icons/Play';

import { AudioMessage } from '../../messages.types';

import styles from './AudioChatMessage.module.css';

type Props = {
  message: AudioMessage;
};

type Status = 'idle' | 'loading' | 'paused' | 'playing';

const formatTime = (seconds: number) => {
  const date = new Date(0);
  date.setSeconds(seconds);
  return date.toISOString().substring(14, 19);
};

const SPEED_CYCLE = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2];

export const AudioChatMessage: React.FC<Props> = ({ message }) => {
  const [status, setStatus] = useState<Status>('loading');

  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(1);
  const [speed, setSpeed] = useState(1);

  const ref = useRef<HTMLAudioElement>(null);

  const handleEnd = () => {
    setStatus('idle');
  };

  const handlePlay = () => {
    if (status !== 'paused') setTime(0);
    setStatus('playing');
    ref.current?.play();
  };

  const handlePause = () => {
    setStatus('paused');
    ref.current?.pause();
  };

  const handleToggle = () => {
    if (status !== 'playing') handlePlay();
    else handlePause();
  };

  const handleTimeUpdate = () => {
    setTime(Math.floor(ref.current?.currentTime || 0));
  };

  const handleSpeedCycle = () => {
    if (!ref.current) return;

    let nextIndex = SPEED_CYCLE.indexOf(speed) + 1;
    if (nextIndex >= SPEED_CYCLE.length) nextIndex = 0;

    const nextSpeed = SPEED_CYCLE[nextIndex];
    setSpeed(SPEED_CYCLE[nextIndex]);
    ref.current.playbackRate = nextSpeed;
  };

  const handleFinishLoad = () => {
    if (status !== 'loading') return;

    setStatus('idle');
    const audioDuration = Math.floor(ref.current?.duration || 0);

    setDuration(audioDuration);
    setTime(audioDuration);
  };

  return (
    <>
      <audio
        onCanPlayThrough={handleFinishLoad}
        onEnded={handleEnd}
        onTimeUpdate={handleTimeUpdate}
        ref={ref}
      >
        <source
          src={message.content.src}
          type={message.content.type}
        />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <div className={styles.container}>
        <Button
          aria-label={
            status === 'loading'
              ? 'Loading message...'
              : status !== 'playing'
                ? 'Play message'
                : 'Pause message'
          }
          className={styles.button}
          onClick={handleToggle}
        >
          {status === 'loading' && <LoadingIcon />}
          {status === 'playing' && <PauseIcon />}
          {(status === 'idle' || status === 'paused') && <PlayIcon />}
        </Button>
        <div className={styles.progress}>
          <div
            className={styles.progressBar}
            style={{
              width:
                status === 'idle' ? 0 : `${(time / duration) * 100}%`,
            }}
          />
        </div>
        <div />
        <div className={styles.time}>
          <span>{formatTime(time)}</span>
          <Button
            className={styles.speedButton}
            onClick={handleSpeedCycle}
          >
            {speed}×
          </Button>
        </div>
      </div>
    </>
  );
};
