const ExperienceVectors = () => (
  <svg style={{ display: 'none' }}>
    <symbol id="agrotis" viewBox="0 0 250 175">
      <path d="m 148.44343,2.0772534 c -0.52177,0.010962 -0.8284,0.049403 -0.8284,0.049403 0,0 -39.14402,0.2893276 -47.733727,0.4765372 C 92.133197,2.7717381 88.876288,11.869055 88.876288,11.869055 L 66.120144,53.117264 95.585973,52.723073 c 0,0 6.467867,-1.476714 9.308437,-9.546728 3.42569,-9.730327 11.45606,-9.785064 11.45606,-9.785064 l 55.9669,-0.354654 c -6.7742,-12.398336 -11.58728,-21.385248 -12.40366,-23.3717735 -2.68498,-6.5333998 -8.25996,-7.507887 -10.88015,-7.5863406 -0.21835,-0.0055 -0.41621,-0.0055 -0.59013,-0.00285 z m 29.25871,40.7687526 -56.10025,0.570253 c 0,0 -5.6837,0.250894 -9.92688,10.346805 -3.53669,8.414844 -10.73835,8.831762 -10.73835,8.831762 L 60.817657,62.728239 43.866158,93.453731 c 29.114557,-0.208061 71.483682,-0.513317 73.797912,-0.513317 3.22184,0 6.32379,-4.536447 6.32379,-4.536447 0,0 4.53442,-7.158389 5.9664,-10.738354 1.43197,-3.57985 7.51821,-4.533589 7.51821,-4.533589 L 194.3444,72.953071 C 188.46266,62.349745 182.71264,51.960729 177.70214,42.846065 Z m 21.94758,39.665084 c -18.04997,0.09226 -51.84851,0.260237 -54.89732,0.167442 -3.93798,-0.119153 -7.63739,4.771906 -7.63739,4.771906 0,0 -3.58095,5.011442 -5.13228,10.023387 -1.55133,5.011935 -9.54674,5.608925 -9.54674,5.608925 l -83.937572,0.10214 -16.599709,30.08717 H 138.42576 c 4.41527,0 6.68411,-4.17619 6.68411,-4.17619 0,0 5.48764,-7.63532 6.91961,-10.97663 1.43198,-3.3413 6.56496,-5.01314 6.56496,-5.01314 l 58.03798,-0.0938 c -5.42468,-9.72591 -11.15204,-20.007971 -16.9827,-30.501359 z m -33.06036,40.38 c -5.1313,0 -6.44305,3.5804 -6.44305,3.5804 0,0 -4.41762,6.44287 -6.0883,10.38085 -1.67063,3.93791 -5.96638,5.48973 -5.96638,5.48973 l -131.25709,0.10487 -7.6430702,13.85628 v 0.002 c -7.1018688,17.47391 7.7764142,16.61394 7.7764142,16.61394 H 233.82505 c 12.90267,-1.06381 7.98355,-14.86342 7.98355,-14.86342 0,0 -8.4861,-15.15155 -19.61265,-35.08038 -21.09882,-0.0328 -51.8996,-0.085 -55.60659,-0.085 z" />
    </symbol>

    <symbol id="ciandt" viewBox="0 0 70 40">
      <path d="M 31.215 28.485 L 31.215 14.427 C 31.215 12.485 29.642 10.912 27.701 10.912 C 25.759 10.912 24.186 12.485 24.186 14.427 L 24.186 28.485 C 24.186 30.427 25.759 32 27.701 32 C 29.641 32 31.215 30.427 31.215 28.485 Z" />
      <path d="M 61.506 10.912 L 51.565 10.912 C 49.623 10.912 48.05 12.485 48.05 14.427 C 48.05 16.368 49.623 17.941 51.565 17.941 L 53.021 17.941 L 53.021 28.485 C 53.021 30.427 54.595 32 56.536 32 C 58.476 32 60.05 30.427 60.05 28.485 L 60.05 17.941 L 61.506 17.941 C 63.448 17.941 65.021 16.368 65.021 14.427 C 65.021 12.486 63.446 10.912 61.506 10.912 Z" />
      <path d="M 19.282 32 C 21.224 32 22.797 30.427 22.797 28.485 C 22.797 26.544 21.224 24.971 19.282 24.971 L 15.523 24.971 C 13.582 24.971 12.008 23.398 12.008 21.456 C 12.008 19.514 13.582 17.941 15.523 17.941 L 19.282 17.941 C 21.224 17.941 22.797 16.368 22.797 14.427 C 22.797 12.485 21.224 10.912 19.282 10.912 L 15.523 10.912 C 9.7 10.912 4.979 15.633 4.979 21.456 C 4.979 27.279 9.7 32 15.523 32 L 19.282 32 Z" />
      <path d="M 33.887 20.921 C 33.078 22.066 32.602 23.462 32.602 24.971 C 32.602 28.852 35.75 32 39.632 32 C 41.14 32 42.536 31.523 43.681 30.715 L 33.887 20.921 Z" />
      <path d="M 50.602 26 L 37.55 12.98 C 36.418 11.848 36.432 9.998 37.581 8.848 C 37.725 8.704 37.882 8.58 38.046 8.471 C 37.294 9.61 37.409 11.145 38.397 12.133 L 45.369 19.088 C 46.181 17.941 46.661 16.542 46.661 15.029 C 46.661 11.147 43.513 8 39.632 8 C 35.75 8 32.602 11.147 32.602 15.029 C 32.602 16.971 33.389 18.727 34.661 20 L 44.602 29.941 L 45.632 30.97 C 47.004 32.343 49.23 32.343 50.602 30.97 C 51.975 29.598 51.975 27.372 50.602 26 Z" />
    </symbol>

    <symbol id="intive" viewBox="0 0 70 130">
      <rect height="20.83" width="20.83" x="24.675" y="10.37" />
      <path d="M 24.555 41.58 L 45.355 41.58 L 45.355 99.63 C 45.355 110.49 37.945 119.63 24.495 119.63 L 24.495 108.27 C 30.015 107.47 33.905 105.01 33.905 99.85 L 33.905 93.61 L 24.555 93.61 L 24.555 41.58 Z" />
    </symbol>

    <symbol id="shippo" viewBox="0 0 520 520">
      <path d="M 291.624 202.909 C 285.109 207.781 275.977 207.954 269.084 203.736 C 262.387 199.639 258.545 191.702 260.042 183.964 C 260.207 183.114 260.445 182.282 260.729 181.464 C 259.872 183.749 259.141 185.684 260.852 181.082 C 262.604 176.438 261.867 178.42 261.005 180.721 C 263.93 173.46 271.348 168.841 279.187 168.981 C 287.378 169.125 294.984 174.368 297.796 182.035 C 300.544 189.525 298.051 198.103 291.624 202.909 Z M 507.788 175.194 C 501.589 160.288 491.646 147.108 478.797 137.209 C 465.314 126.819 449.04 120.26 432.146 117.998 C 422.289 116.678 412.291 116.879 402.477 118.455 C 392.214 120.103 382.529 123.42 373.007 127.485 C 368.344 129.477 363.721 131.56 359.068 133.578 C 344.872 141.95 328.86 146.715 312.315 146.932 C 303.745 147.044 295.194 146.089 286.823 144.264 C 282.416 143.304 278.062 142.107 273.771 140.722 C 269.61 139.377 265.399 138.518 261.035 138.149 C 251.121 137.307 241.133 138.637 231.288 139.685 L 207.527 142.238 C 207.494 142.191 207.468 142.16 207.442 142.114 L 206.745 142.184 C 200.707 135.52 193.236 130.278 185.918 125.109 C 183.832 123.635 181.802 122.346 179.18 122.107 C 171.764 122.038 170.003 130.867 169.574 136.588 C 169.051 143.571 169.887 150.749 171.491 157.553 C 172.105 160.159 172.784 162.92 174.083 165.289 C 174.083 165.289 175.227 170.346 177.231 175.074 C 174.654 178.206 172.585 181.767 171.147 185.552 C 170.643 186.883 170.13 188.048 169.344 189.243 C 167.034 192.761 164.238 195.983 161.491 199.164 C 152.202 209.921 142.301 220.167 132.395 230.359 C 127.755 235.133 87.772 248.329 64.747 255.65 C 66.963 150.214 153.117 65.424 259.082 65.424 C 309.255 65.424 354.984 84.436 389.47 115.643 C 393.927 114.351 398.228 113.363 402.477 112.682 C 408.281 111.75 414.149 111.277 419.913 111.277 C 420.493 111.277 421.071 111.296 421.649 111.306 C 381.386 67.256 323.464 39.62 259.082 39.62 C 137.475 39.62 38.891 138.204 38.891 259.811 C 38.891 381.419 137.475 480.003 259.082 480.003 C 370.862 480.003 463.177 396.709 477.371 288.804 C 476.52 289.32 475.684 289.859 474.811 290.351 C 469.276 293.477 463.526 295.804 457.967 298.052 C 456.047 298.832 454.236 299.563 452.431 300.326 C 451.268 300.817 450.081 301.34 448.894 301.863 C 430.238 386.451 356.493 450.353 267.198 454.022 C 286.498 425.273 325.234 368.772 336.588 361 C 352.132 350.358 367.862 339.977 383.893 330.07 C 398.567 321 413.493 312.287 428.886 304.465 C 435.56 301.075 442.326 297.855 449.226 294.939 C 456.572 291.837 464.048 289.188 471.01 285.259 C 483.552 278.182 494.402 268.23 502.113 256.099 C 509.492 244.493 513.854 231.128 514.872 217.447 C 515.946 203.047 513.331 188.519 507.788 175.194" />
    </symbol>
  </svg>
);

export default ExperienceVectors;
