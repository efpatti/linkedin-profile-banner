const colors = [
 "#ef4444", // 0
 "#f97316", // 1
 "#eab308", // 2
 "#22c55e", // 3
 "#14b8a6", // 4
 "#10b981", // 5
 "#3b82f6", // 6
 "#06b6d4", // 7
 "#6366f1", // 8
 "#a855f7", // 9
 "#8b5cf6", // 10
 "#ec4899", // 11
] as const;
const LogoSVG = ({ className }: { className?: string }) => (
 <svg
  version="1.0"
  xmlns="http://www.w3.org/2000/svg"
  width="1024pt"
  height="1024pt"
  viewBox="0 0 1024 1024"
  preserveAspectRatio="xMidYMid meet"
  className={className}
 >
  <defs>
   <linearGradient id="letterFGradient" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="20%" stopColor={colors[0]} /> {/* Vermelho */}
    <stop offset="40%" stopColor={colors[1]} /> {/* Laranja */}
    <stop offset="60%" stopColor={colors[2]} /> {/* Amarelo */}
   </linearGradient>
   <linearGradient id="letterIGradient" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="20%" stopColor={colors[3]} /> {/* Verde */}
    <stop offset="40%" stopColor={colors[4]} /> {/* Ciano */}
    <stop offset="60%" stopColor={colors[5]} /> {/* Verde-água */}
   </linearGradient>
   <linearGradient id="letterLGradient" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="20%" stopColor={colors[6]} /> {/* Azul */}
    <stop offset="40%" stopColor={colors[7]} /> {/* Azul claro */}
    <stop offset="60%" stopColor={colors[8]} /> {/* Roxo claro */}
   </linearGradient>
   <linearGradient id="letterEGradient" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="20%" stopColor={colors[9]} /> {/* Roxo */}
    <stop offset="40%" stopColor={colors[10]} /> {/* Roxo escuro */}
    <stop offset="60%" stopColor={colors[11]} /> {/* Rosa */}
   </linearGradient>
  </defs>
  <g
   transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
   stroke="none"
  >
   {/* Primeira parte do logo - mantendo branco */}
   <path
    d="M2012 6523 c-21 -8 -59 -71 -399 -653 -182 -311 -391 -668 -465 -795
-74 -126 -142 -244 -152 -262 -21 -41 -20 -86 2 -111 15 -18 193 -131 975
-616 143 -89 161 -98 195 -93 22 3 146 66 312 160 151 85 345 193 430 241 85
48 161 94 168 103 9 13 12 131 12 510 l0 494 -119 127 c-66 70 -294 301 -508
515 -394 393 -403 400 -451 380z m917 -1510 l1 -432 -107 -59 c-60 -33 -219
-123 -355 -200 l-248 -140 0 174 0 174 279 0 c260 0 280 1 302 19 l24 19 3
392 3 392 -218 219 -217 219 -243 0 -244 0 -24 -26 -25 -27 0 -574 0 -575 29
-29 c27 -27 35 -29 105 -29 l76 0 0 -161 c0 -88 -3 -159 -7 -157 -5 2 -35 20
-68 41 -33 21 -233 146 -444 277 -210 131 -385 241 -388 243 -4 5 101 187 394
682 88 149 233 396 323 550 90 154 168 288 174 297 9 15 73 -46 443 -420 l432
-437 0 -432z m-719 432 c0 -268 -23 -245 251 -245 l207 0 -1 -265 -2 -265
-322 0 -323 0 0 490 0 490 95 0 95 0 0 -205z m409 -101 c2 -2 -55 -4 -127 -4
l-132 0 0 134 0 134 128 -130 c70 -71 129 -131 131 -134z"
    fill="#f8fbff"
   />
   <path
    d="M2185 4995 c-14 -13 -25 -36 -25 -50 0 -14 11 -37 25 -50 23 -24 28
-25 170 -25 142 0 147 1 170 25 14 13 25 36 25 50 0 14 -11 37 -25 50 -23 24
-28 25 -170 25 -142 0 -147 -1 -170 -25z"
    fill="#f8fbff"
   />

   {/* Bolinha do i */}
   <path
    d="M7368 5804 c-15 -8 -35 -28 -43 -44 -44 -84 13 -170 113 -170 34 0
49 6 79 34 31 28 38 41 38 74 0 22 -6 51 -14 64 -28 53 -114 74 -173 42z"
    fill="url(#letterIGradient)"
   />

   {/* Letra P */}
   <path
    d="M3660 5185 l0 -595 90 0 90 0 0 219 0 219 173 4 c216 5 260 19 354
113 75 76 98 135 98 265 0 152 -59 259 -175 318 -88 44 -148 52 -407 52 l-223
0 0 -595z m505 406 c120 -54 151 -229 59 -331 -47 -52 -116 -70 -267 -70
l-117 0 0 210 0 210 143 0 c116 0 149 -4 182 -19z"
    fill="#f8fbff"
   />

   {/* Letra F - com gradiente aplicado */}
   <path
    d="M6280 5185 l0 -595 90 0 90 0 0 250 0 250 235 0 235 0 0 80 0 80
-235 0 -235 0 0 180 0 180 265 0 265 0 0 85 0 85 -355 0 -355 0 0 -595z"
    fill="url(#letterFGradient)"
   />

   {/* Letra l */}
   <path
    d="M7880 5700 l0 -80 120 0 120 0 0 -435 0 -435 -110 0 -110 0 0 -80 0
-80 300 0 300 0 0 80 0 80 -100 0 -100 0 0 515 0 515 -210 0 -210 0 0 -80z"
    fill="url(#letterLGradient)"
   />

   {/* Letra r */}
   <path
    d="M5020 5471 c-64 -13 -129 -52 -173 -101 l-42 -49 3 74 4 75 -96 0
-96 0 0 -440 0 -440 93 0 92 0 0 258 c0 291 3 301 84 375 62 56 154 73 294 54
l57 -7 0 89 c0 68 -4 92 -16 101 -18 15 -152 23 -204 11z"
    fill="#f8fbff"
   />

   {/* Letra o */}
   <path
    d="M5609 5467 c-98 -28 -201 -114 -240 -201 -65 -149 -65 -357 2 -488
34 -67 113 -142 182 -174 57 -27 71 -29 177 -29 103 0 121 3 170 26 149 70
227 200 237 394 9 173 -33 293 -134 385 -72 66 -144 93 -258 97 -52 1 -109 -3
-136 -10z m206 -166 c86 -39 126 -119 133 -262 6 -121 -12 -182 -72 -244 -77
-80 -192 -86 -279 -14 -19 16 -45 50 -58 76 -21 42 -24 63 -24 168 0 111 2
124 27 170 14 28 37 60 50 72 56 53 151 67 223 34z"
    fill="#f8fbff"
   />

   {/* Letra e */}
   <path
    d="M8822 5459 c-116 -41 -207 -147 -242 -286 -47 -183 -5 -378 105 -488
81 -81 176 -115 325 -115 100 0 141 8 228 42 l53 21 -7 86 c-4 47 -8 88 -10
90 -2 2 -12 -3 -21 -12 -32 -28 -127 -59 -200 -64 -82 -7 -152 8 -203 41 -37
24 -83 99 -95 154 l-7 32 301 0 301 0 0 83 c0 98 -19 179 -62 259 -62 116
-155 169 -307 175 -79 3 -107 0 -159 -18z m238 -161 c35 -18 51 -35 73 -77 15
-30 27 -66 27 -80 l0 -26 -202 3 c-200 2 -203 2 -200 23 11 68 68 146 122 168
46 18 132 13 180 -11z"
    fill="url(#letterEGradient)"
   />

   {/* Letra i */}
   <path
    d="M7142 5389 l3 -82 108 2 107 2 0 -280 0 -281 -120 0 -120 0 0 -64 c0
-35 -3 -71 -6 -80 -6 -14 27 -16 325 -16 l331 0 0 80 0 80 -115 0 -115 0 0
360 0 360 -200 0 -201 0 3 -81z"
    fill="url(#letterIGradient)"
   />
  </g>
 </svg>
);

export default LogoSVG;
