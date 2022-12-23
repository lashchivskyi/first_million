import React from 'react';

const Hand = ({
  mobile = false,
  className = '',
  onClick,
}: {
  mobile: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<SVGElement>) => void;
}) => (
  <svg
    width={mobile ? '197' : '453'}
    height={mobile ? '155' : '357'}
    viewBox="0 0 453 357"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    onClick={onClick}
  >
    <path
      d="M348.483 206.523C355.09 182.842 360.375 158.792 364.339 134.523C368.377 125.329 372.928 116.357 377.92 107.679C384.086 97.0146 391.354 87.1596 398.107 76.8633C404.127 67.6701 409.559 57.5209 410.22 46.4156C410.734 37.7373 408.825 28.3971 403.026 21.6309C396.639 14.1293 386.802 11.1875 377.186 12.0701C366.762 12.9526 357.292 18.4685 349.217 24.8669C340.481 31.8537 332.333 39.7966 324.625 47.813C309.723 63.331 296.509 80.4669 285.131 98.7061C276.762 95.4701 268.687 91.5722 260.612 87.7479C248.867 82.1585 236.975 77.231 224.348 73.9214C201.812 68.0378 176.412 65.7579 154.316 74.4362C134.349 82.3056 117.538 100.251 117.245 122.608C117.098 131.434 119.667 139.156 123.925 145.922C114.822 150.923 107.114 158.057 102.343 167.471C97.4976 177.032 96.5433 188.725 100.507 198.727C101.976 202.405 104.031 205.714 106.527 208.656C99.1126 215.422 92.4324 224.027 89.3492 233.661C86.4128 242.781 88.1012 251.974 92.9462 260.137C94.341 262.417 95.956 264.55 97.7178 266.609C89.5694 273.743 86.9267 285.437 89.3492 295.88C92.1387 308.162 101.095 317.723 110.711 325.298C118.126 331.108 126.054 336.33 134.276 340.963C138.386 343.537 142.718 345.964 147.049 348.171C151.673 350.451 156.518 352.584 161.437 354.054C164.814 355.084 168.264 355.967 171.714 356.408C174.063 356.702 176.412 356.849 178.761 356.776C179.936 356.776 181.11 356.702 182.212 356.555C185.442 356.261 188.672 355.378 191.828 354.349C194.03 353.613 196.159 352.657 198.215 351.48C199.83 350.598 201.445 349.642 202.913 348.612C212.162 350.818 221.559 352.069 231.102 351.922C251.436 351.554 270.523 343.317 285.939 330.152C302.896 315.737 314.862 296.542 323.964 276.391C334.168 254.033 341.803 230.278 348.483 206.523Z"
      fill="#EF9E81"
    />
    <path
      d="M98.8768 268.978C112.93 278.037 127.498 286.36 142.434 293.8C149.791 297.482 157.296 301.018 164.948 304.112C172.526 307.205 180.325 309.857 188.419 311.477C195.924 312.95 204.09 313.687 211.669 312.214C216.378 311.33 221.454 310.151 225.501 307.5C227.929 305.953 229.989 303.964 231.902 301.828C233.594 299.913 235.36 297.851 236.611 295.641C238.598 292.032 239.701 287.981 240.143 283.93C241.393 273.691 238.083 263.085 229.842 256.603C228.665 255.646 227.34 254.762 226.016 254.025C224.986 253.436 224.103 254.983 225.06 255.646C229.842 258.445 233.668 262.422 236.022 267.504C238.009 271.776 238.745 276.638 238.524 281.352C238.303 285.403 237.494 289.454 235.802 293.137C235.066 294.757 234.109 296.23 233.006 297.63C231.019 300.208 228.812 302.638 226.31 304.701C222.779 307.573 218.438 308.826 214.097 309.857C206.886 311.624 199.308 311.403 192.024 310.299C176.279 307.868 161.49 301.092 147.29 294.168C132.722 287.097 118.522 279.216 104.836 270.598C103.144 269.567 101.526 268.462 99.8333 267.431C98.8032 266.768 97.8467 268.388 98.8768 268.978Z"
      fill="#C4674E"
    />
    <path
      d="M112.562 211.378C128.969 219.112 145.524 226.625 162.079 233.843C177.971 240.841 194.011 247.838 210.786 252.478C218.879 254.762 227.561 256.898 236.022 255.425C242.276 254.32 248.015 251.153 252.43 246.66C256.918 242.093 260.155 236.2 261.48 229.866C262.289 226.183 261.995 222.353 261.333 218.67C259.346 207.99 252.871 198.341 243.454 192.964C242.056 192.154 240.584 191.491 239.039 190.828C237.935 190.386 237.494 192.154 238.524 192.596C248.751 196.868 256.109 205.707 258.905 216.313C259.861 219.996 260.376 223.9 259.935 227.656C259.346 233.107 256.624 238.631 253.239 242.903C249.34 247.691 244.116 251.3 238.156 252.994C230.284 255.13 222.043 253.51 214.318 251.447C198.057 247.249 182.533 240.693 167.155 233.991C151.116 226.993 135.223 219.849 119.331 212.483C117.344 211.525 115.358 210.642 113.371 209.684C112.415 209.316 111.532 210.936 112.562 211.378Z"
      fill="#C4674E"
    />
    <path
      d="M129.852 148.991C148.467 156.725 166.493 165.785 184.814 173.961C193.863 178.012 203.06 181.842 212.405 185.23C221.896 188.692 231.755 192.08 241.835 193.185C250.59 194.216 259.935 193.038 267.366 187.882C270.75 185.525 273.62 182.431 275.459 178.749C277.372 174.992 278.255 170.72 278.181 166.522C278.181 157.83 274.282 149.802 268.543 143.394C262.289 136.396 254.049 131.535 245.514 127.778C238.23 124.538 230.725 121.886 223.294 119.013C216.01 116.214 208.873 113.268 201.81 110.027C199.529 108.996 197.248 107.965 194.967 106.86C193.937 106.344 192.98 107.965 194.011 108.48C201.662 112.016 209.388 115.404 217.187 118.571C223.735 121.149 230.284 123.654 236.832 126.158C245.587 129.546 254.343 133.45 261.7 139.416C268.175 144.719 273.693 151.79 275.606 160.04C277.519 168.142 275.827 177.275 269.867 183.315C263.908 189.355 255.152 191.712 246.838 191.565C236.832 191.417 226.973 188.177 217.628 185.009C208.284 181.842 199.161 178.159 190.185 174.255C172.232 166.448 154.721 157.609 136.695 149.875C134.561 148.918 132.354 148.034 130.22 147.15C129.264 146.708 128.749 148.549 129.852 148.991Z"
      fill="#C4674E"
    />
    <path
      d="M204.458 344.991C207.181 339.393 208.284 332.985 207.549 326.797C207.181 323.778 206.445 320.758 205.268 317.885C204.238 315.381 202.913 312.066 200.117 311.182C199.014 310.814 198.499 312.582 199.602 312.95C200.853 313.318 201.589 314.571 202.178 315.675C202.84 316.928 203.428 318.18 203.943 319.505C204.9 322.157 205.562 324.882 205.783 327.681C206.298 333.279 205.268 338.951 202.84 344.033C202.325 345.138 203.943 346.095 204.458 344.991Z"
      fill="#C4674E"
    />
    <path
      d="M234.477 179.043C234.845 167.7 239.775 156.725 247.942 148.918C248.825 148.107 247.5 146.782 246.617 147.592C238.082 155.768 233.006 167.184 232.564 178.969C232.638 180.222 234.477 180.222 234.477 179.043Z"
      fill="#C4674E"
    />
    <path
      d="M245.072 151.422C249.193 152.601 253.313 154 257.065 156.136C260.082 157.83 262.878 160.335 263.466 163.944C264.055 167.479 262.436 171.088 259.861 173.445C257.139 176.023 253.313 177.202 249.634 177.496C244.557 177.865 239.554 176.465 234.698 175.066C233.594 174.771 233.079 176.539 234.183 176.834C242.718 179.338 252.945 181.474 260.523 175.287C263.466 172.856 265.453 169.1 265.379 165.196C265.379 161.145 263.025 157.904 259.861 155.694C257.948 154.368 255.814 153.337 253.681 152.453C251.032 151.348 248.31 150.391 245.514 149.581C244.41 149.286 243.969 151.054 245.072 151.422Z"
      fill="#C4674E"
    />
    <path
      d="M212.037 237.526C212.405 225.373 217.702 213.662 226.458 205.265C227.341 204.455 226.016 203.129 225.133 203.939C216.01 212.63 210.565 224.857 210.124 237.526C210.124 238.705 211.963 238.705 212.037 237.526Z"
      fill="#C4674E"
    />
    <path
      d="M223.441 207.916C227.782 209.168 232.196 210.715 236.17 212.925C239.48 214.766 242.571 217.491 243.159 221.469C243.674 225.225 241.982 229.056 239.26 231.56C236.243 234.359 232.123 235.611 228.15 235.906C222.705 236.274 217.408 234.801 212.257 233.328C211.154 233.033 210.639 234.801 211.742 235.095C220.719 237.747 231.608 240.03 239.628 233.622C242.865 231.044 244.999 226.993 244.999 222.795C244.999 218.449 242.424 214.987 239.039 212.557C236.979 211.083 234.698 210.052 232.417 209.095C229.621 207.916 226.752 206.885 223.882 206.075C222.779 205.78 222.264 207.548 223.441 207.916Z"
      fill="#C4674E"
    />
    <path
      d="M192.171 296.82C192.539 284.666 197.837 272.955 206.592 264.558C207.475 263.748 206.151 262.422 205.268 263.232C196.144 271.924 190.7 284.151 190.258 296.82C190.258 297.998 192.098 297.998 192.171 296.82Z"
      fill="#C4674E"
    />
    <path
      d="M203.576 267.136C207.917 268.388 212.331 269.935 216.304 272.145C219.615 273.986 222.705 276.711 223.294 280.689C223.809 284.445 222.117 288.275 219.394 290.78C216.378 293.579 212.258 294.831 208.284 295.125C202.84 295.494 197.542 294.021 192.392 292.547C191.288 292.253 190.773 294.021 191.877 294.315C200.853 296.967 211.742 299.25 219.762 292.842C223 290.264 225.133 286.213 225.133 282.015C225.133 277.669 222.558 274.207 219.174 271.776C217.114 270.303 214.833 269.272 212.552 268.314C209.756 267.136 206.886 266.105 204.017 265.295C202.913 265 202.398 266.841 203.576 267.136Z"
      fill="#C4674E"
    />
    <path
      d="M168.553 341.529C168.847 332.395 172.821 323.557 179.442 317.222C180.325 316.412 179.001 315.086 178.118 315.896C171.128 322.525 167.008 331.88 166.714 341.455C166.714 342.707 168.553 342.707 168.553 341.529Z"
      fill="#C4674E"
    />
    <path
      d="M176.941 319.284C180.178 320.242 183.489 321.347 186.432 323.041C188.86 324.44 191.215 326.429 191.656 329.375C192.098 332.174 190.773 335.121 188.713 336.962C186.432 339.024 183.342 339.908 180.399 340.129C176.352 340.35 172.453 339.319 168.553 338.14C167.45 337.846 166.935 339.614 168.038 339.908C174.954 341.897 183.268 343.665 189.375 338.73C191.877 336.741 193.495 333.647 193.495 330.407C193.495 327.092 191.583 324.367 188.934 322.452C185.549 320.021 181.282 318.622 177.309 317.517C176.279 317.148 175.837 318.916 176.941 319.284Z"
      fill="#C4674E"
    />
    <path
      d="M400.832 262.864L394.726 241.872L389.06 262.864L368.753 269.566L389.06 276.416L394.726 299.176L401.127 276.564L420.698 269.566L400.832 262.864Z"
      fill="#FFD62A"
    />
    <path
      d="M62.898 101.336L56.9384 80.7857L51.3466 101.262L31.4811 107.891L51.3466 114.52L56.9384 136.838L63.1923 114.668L82.3956 107.891L62.898 101.336Z"
      fill="#FFD62A"
    />
    <path
      d="M440.416 208.874L436.737 196.205L433.279 208.874L421.066 212.851L433.279 216.976L436.737 230.75L440.563 217.123L452.409 212.851L440.416 208.874Z"
      fill="#FFD62A"
    />
    <path
      d="M19.7826 169.467L16.1774 157.093L12.7929 169.467L0.799988 173.445L12.7929 177.422L16.1774 190.901L19.9297 177.496L31.4812 173.445L19.7826 169.467Z"
      fill="#FFD62A"
    />
    <path
      d="M252.136 10.4439L249.192 0.205673L246.397 10.4439L236.537 13.6848L246.397 16.9993L249.192 28.1214L252.283 17.0729L261.848 13.6848L252.136 10.4439Z"
      fill="#FFD62A"
    />
    <path
      d="M59.8814 326.503L56.9384 316.264L54.1425 326.503L44.2833 329.817L54.1425 333.132L56.9384 344.18L60.0286 333.205L69.5934 329.817L59.8814 326.503Z"
      fill="#FFD62A"
    />
  </svg>
);

export default Hand;
