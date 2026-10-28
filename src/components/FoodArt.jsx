// Original flat illustrations, drawn in code (no external images needed).
const B = "#111312";
const W = "#ffffff";
const S = "#9caf88";
const SD = "#6f8660";
const SL = "#e3eadb";
const G = "#dde1dd";
const G2 = "#c5cbc6";
const CREAM = "#efe3c6";
const GOLD = "#d9b56e";
const TOAST = "#c58f4e";
const CURRY = "#a85a34";
const YEL = "#e8cf7a";
const BROWN = "#5a3a26";

const Plate = ({ y = 104 }) => (
  <g>
    <ellipse cx="100" cy={y + 6} rx="82" ry="30" fill={G2} opacity=".5" />
    <ellipse cx="100" cy={y} rx="78" ry="30" fill={G} />
    <ellipse cx="100" cy={y - 3} rx="66" ry="24" fill={W} />
  </g>
);

const Bowl = ({ fill = W, cy = 100 }) => (
  <g>
    <ellipse cx="100" cy={cy + 34} rx="46" ry="6" fill={G2} opacity=".5" />
    <path d={`M44 ${cy} h112 a56 46 0 0 1 -112 0 z`} fill={B} />
    <ellipse cx="100" cy={cy} rx="56" ry="12" fill={fill} />
  </g>
);

const Steam = ({ x = 100, y = 30 }) => (
  <g fill="none" stroke={G2} strokeWidth="4" strokeLinecap="round">
    <path d={`M${x - 14} ${y + 20} q-8 -10 0 -20 q8 -10 0 -20`} />
    <path d={`M${x} ${y + 24} q-8 -10 0 -20 q8 -10 0 -20`} />
    <path d={`M${x + 14} ${y + 20} q-8 -10 0 -20 q8 -10 0 -20`} />
  </g>
);

const Spots = ({ pts, r = 2.5, fill = BROWN, o = 0.55 }) => (
  <g fill={fill} opacity={o}>
    {pts.map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r={r} />
    ))}
  </g>
);

const ART = {
  // 1 Aloo paratha
  1: (
    <g>
      <Plate />
      <ellipse cx="96" cy="96" rx="44" ry="19" fill={GOLD} />
      <ellipse cx="96" cy="93" rx="38" ry="15" fill={TOAST} opacity=".35" />
      <Spots pts={[[80, 92], [96, 88], [112, 94], [100, 99], [84, 100], [116, 87]]} r={3} />
      <ellipse cx="140" cy="92" rx="16" ry="8" fill={B} />
      <ellipse cx="140" cy="90" rx="13" ry="5.5" fill={W} />
      <Steam x={90} y={26} />
    </g>
  ),
  // 2 Halwa puri
  2: (
    <g>
      <Plate />
      <circle cx="72" cy="88" r="25" fill={GOLD} />
      <circle cx="72" cy="86" r="19" fill={TOAST} opacity=".4" />
      <circle cx="66" cy="80" r="6" fill={W} opacity=".35" />
      <circle cx="118" cy="82" r="22" fill={GOLD} />
      <circle cx="118" cy="80" r="16" fill={TOAST} opacity=".4" />
      <circle cx="113" cy="74" r="5" fill={W} opacity=".35" />
      <ellipse cx="108" cy="110" rx="26" ry="10" fill="#c9944a" />
      <Spots pts={[[100, 108], [112, 106], [118, 112]]} r={2} fill={S} o={1} />
      <circle cx="148" cy="100" r="11" fill={CURRY} />
    </g>
  ),
  // 3 Omelette toast
  3: (
    <g>
      <Plate />
      <path d="M52 100 q48 -52 96 0 q-48 26 -96 0 z" fill={YEL} />
      <path d="M62 98 q38 -34 76 0" fill="none" stroke={W} strokeWidth="3" opacity=".5" strokeLinecap="round" />
      <Spots pts={[[86, 92], [104, 90], [118, 96]]} r={2.5} fill={SD} o={1} />
      <rect x="132" y="74" width="30" height="30" rx="5" fill={TOAST} transform="rotate(10 147 89)" />
      <rect x="136" y="78" width="22" height="22" rx="3" fill={CREAM} transform="rotate(10 147 89)" />
    </g>
  ),
  // 4 Biryani
  4: (
    <g>
      <Bowl fill={CREAM} />
      <path d="M52 96 q48 -58 96 0 q-48 14 -96 0z" fill={CREAM} />
      <Spots pts={[[78, 82], [96, 72], [116, 80], [128, 90], [66, 92], [104, 90]]} r={3} fill={GOLD} o={1} />
      <circle cx="92" cy="86" r="9" fill={TOAST} />
      <circle cx="118" cy="88" r="8" fill={TOAST} />
      <Spots pts={[[86, 80], [110, 78], [124, 84]]} r={2.5} fill={SD} o={1} />
      <Steam x={100} y={14} />
    </g>
  ),
  // 5 Daal chawal
  5: (
    <g>
      <Plate />
      <path d="M44 104 q26 -42 52 0 q-26 14 -52 0z" fill={W} stroke={G} strokeWidth="2" />
      <Spots pts={[[60, 96], [72, 90], [80, 98], [68, 100]]} r={2} fill={G2} o={1} />
      <ellipse cx="132" cy="96" rx="26" ry="11" fill={B} />
      <ellipse cx="132" cy="93" rx="22" ry="8" fill="#e0b84e" />
      <Spots pts={[[126, 92], [138, 94]]} r={2} fill={CURRY} o={1} />
      <path d="M118 80 q6 -8 12 0 q-6 4 -12 0z" fill={S} />
      <path d="M134 80 q6 -8 12 0 q-6 4 -12 0z" fill={SD} />
    </g>
  ),
  // 6 Chicken karahi
  6: (
    <g>
      <ellipse cx="100" cy="134" rx="62" ry="8" fill={G2} opacity=".5" />
      <rect x="24" y="84" width="22" height="8" rx="4" fill={B} />
      <rect x="154" y="84" width="22" height="8" rx="4" fill={B} />
      <path d="M40 88 h120 a60 44 0 0 1 -120 0z" fill={B} />
      <ellipse cx="100" cy="88" rx="60" ry="13" fill={CURRY} />
      <circle cx="82" cy="88" r="8" fill={TOAST} />
      <circle cx="110" cy="86" r="9" fill={TOAST} />
      <circle cx="128" cy="90" r="7" fill={TOAST} />
      <Spots pts={[[96, 90], [70, 90], [120, 94]]} r={3} fill={S} o={1} />
      <path d="M92 83 l6 -6 l6 6 z" fill={SD} />
      <Steam x={100} y={10} />
    </g>
  ),
  // 7 Veggie pulao
  7: (
    <g>
      <Plate />
      <path d="M46 102 q54 -64 108 0 q-54 22 -108 0z" fill={CREAM} />
      <Spots pts={[[76, 88], [92, 76], [112, 82], [128, 94], [66, 98]]} r={3.5} fill="#d98b4a" o={1} />
      <Spots pts={[[86, 92], [104, 90], [120, 98], [96, 82]]} r={3} fill={S} o={1} />
      <Spots pts={[[100, 98], [80, 98], [118, 88]]} r={2.5} fill={B} o={0.8} />
    </g>
  ),
  // 8 Samosa chaat
  8: (
    <g>
      <Plate />
      <path d="M52 108 l32 -44 l32 44z" fill={GOLD} />
      <path d="M62 106 l22 -30 l22 30z" fill={TOAST} opacity=".35" />
      <path d="M96 106 l30 -40 l30 40z" fill={GOLD} />
      <path d="M52 92 q22 -10 44 0 q22 10 50 -6" fill="none" stroke={W} strokeWidth="6" strokeLinecap="round" />
      <path d="M60 100 q24 -8 50 2" fill="none" stroke={CURRY} strokeWidth="3.5" strokeLinecap="round" opacity=".8" />
      <Spots pts={[[72, 88], [90, 94], [110, 86], [128, 92], [100, 100]]} r={2.5} fill={SD} o={1} />
    </g>
  ),
  // 9 Club sandwich
  9: (
    <g>
      <Plate y={112} />
      <path d="M46 98 l54 -34 l54 34 l-54 22z" fill={CREAM} stroke={TOAST} strokeWidth="5" strokeLinejoin="round" />
      <path d="M46 84 q14 8 28 0 q14 8 28 0 q14 8 28 0 q14 8 24 0 v8 h-108z" fill={S} />
      <rect x="46" y="94" width="108" height="8" fill={CURRY} opacity=".8" />
      <path d="M46 102 l54 22 l54 -22 v12 l-54 22 l-54 -22z" fill={CREAM} stroke={TOAST} strokeWidth="5" strokeLinejoin="round" />
      <rect x="98" y="46" width="4" height="40" rx="2" fill={B} />
      <circle cx="100" cy="44" r="5" fill={SD} />
    </g>
  ),
  // 10 Masala fries
  10: (
    <g>
      <ellipse cx="100" cy="138" rx="46" ry="7" fill={G2} opacity=".5" />
      {[58, 68, 78, 88, 98, 108, 118, 128, 138].map((x, i) => (
        <rect key={x} x={x - 4} y={34 + (i % 3) * 8} width="9" height={62 - (i % 3) * 4} rx="3" fill={i % 2 ? GOLD : YEL} transform={`rotate(${(i - 4) * 4} ${x} 96)`} />
      ))}
      <path d="M52 92 h96 l-10 44 h-76z" fill={B} />
      <path d="M62 104 h76 l-3 14 h-70z" fill={S} />
      <Spots pts={[[70, 60], [96, 52], [120, 64], [84, 76], [128, 82]]} r={2.5} fill={CURRY} o={0.9} />
    </g>
  ),
  // 11 Chicken roll
  11: (
    <g>
      <Plate y={110} />
      <g transform="rotate(-18 100 90)">
        <rect x="52" y="64" width="96" height="42" rx="20" fill={GOLD} />
        <rect x="60" y="70" width="80" height="30" rx="14" fill={TOAST} opacity=".3" />
        <path d="M118 64 h30 v42 h-30z" fill={W} />
        <path d="M118 64 v42" stroke={G2} strokeWidth="2" />
        <path d="M148 70 q10 6 0 30" fill={W} stroke={G2} strokeWidth="2" />
        <circle cx="156" cy="85" r="10" fill={CURRY} />
        <circle cx="154" cy="82" r="4" fill={S} />
      </g>
    </g>
  ),
  // 12 Chai
  12: (
    <g>
      <ellipse cx="100" cy="132" rx="58" ry="9" fill={G} />
      <ellipse cx="100" cy="128" rx="50" ry="7" fill={W} />
      <path d="M62 72 h76 v28 a38 34 0 0 1 -76 0z" fill={W} stroke={G2} strokeWidth="3" />
      <path d="M62 72 h76 v10 h-76z" fill="#c9a074" />
      <path d="M138 80 q26 -4 20 20 q-4 14 -26 12" fill="none" stroke={G2} strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="100" cy="72" rx="38" ry="7" fill="#b88555" />
      <Steam x={100} y={24} />
    </g>
  ),
  // 13 Cold coffee
  13: (
    <g>
      <ellipse cx="100" cy="142" rx="38" ry="6" fill={G2} opacity=".5" />
      <rect x="116" y="14" width="6" height="86" rx="3" fill={S} transform="rotate(14 119 56)" />
      <path d="M64 44 h72 l-8 92 h-56z" fill={W} stroke={G2} strokeWidth="3" />
      <path d="M67 60 h66 l-6 76 h-54z" fill="#8a6244" />
      <path d="M69 84 h62 l-3 52 h-56z" fill={BROWN} />
      <path d="M64 44 h72 l-1 16 h-70z" fill={CREAM} />
      <rect x="82" y="86" width="14" height="14" rx="3" fill={W} opacity=".4" transform="rotate(-12 89 93)" />
      <rect x="106" y="104" width="13" height="13" rx="3" fill={W} opacity=".4" transform="rotate(14 112 110)" />
    </g>
  ),
  // 14 Mint lemonade
  14: (
    <g>
      <ellipse cx="100" cy="142" rx="38" ry="6" fill={G2} opacity=".5" />
      <path d="M64 44 h72 l-8 92 h-56z" fill={SL} stroke={G2} strokeWidth="3" />
      <path d="M67 58 h66 l-5 78 h-56z" fill="#e9efb8" />
      <circle cx="100" cy="92" r="22" fill={YEL} stroke="#e8d98a" strokeWidth="4" />
      <path d="M100 70 v44 M78 92 h44 M84 76 l32 32 M116 76 l-32 32" stroke={W} strokeWidth="2" opacity=".7" />
      <path d="M78 52 q8 -22 22 -6 q-6 14 -22 6z" fill={S} />
      <path d="M104 44 q12 -20 24 -2 q-8 14 -24 2z" fill={SD} />
      <rect x="86" y="108" width="12" height="12" rx="3" fill={W} opacity=".55" transform="rotate(14 92 114)" />
      <rect x="108" y="116" width="11" height="11" rx="3" fill={W} opacity=".55" transform="rotate(-10 113 121)" />
    </g>
  ),
  // 15 Gulab jamun
  15: (
    <g>
      <Bowl fill="#d9a05a" cy={96} />
      <circle cx="82" cy="88" r="20" fill={BROWN} />
      <circle cx="118" cy="88" r="20" fill="#4a2f1e" />
      <ellipse cx="76" cy="80" rx="6" ry="4" fill={W} opacity=".3" />
      <ellipse cx="112" cy="80" rx="6" ry="4" fill={W} opacity=".3" />
      <Spots pts={[[96, 74], [100, 66], [92, 68]]} r={2.5} fill={S} o={1} />
      <Steam x={100} y={8} />
    </g>
  ),
  // 16 Kheer
  16: (
    <g>
      <Bowl fill={CREAM} cy={96} />
      <path d="M48 94 q52 -22 104 0 q-52 14 -104 0z" fill={W} />
      <Spots pts={[[76, 92], [92, 88], [110, 90], [126, 94], [100, 96]]} r={3} fill={S} o={1} />
      <Spots pts={[[84, 96], [118, 88]]} r={2.5} fill={GOLD} o={1} />
      <path d="M96 60 l4 8 l8 1 l-6 6 l2 8 l-8 -4 l-8 4 l2 -8 l-6 -6 l8 -1z" fill={GOLD} transform="translate(0 4) scale(.9)" />
    </g>
  ),
};

export default function FoodArt({ id, name, className = "" }) {
  return (
    <svg
      className={"foodart " + className}
      viewBox="0 0 200 160"
      role="img"
      aria-label={name}
      preserveAspectRatio="xMidYMid meet"
    >
      {ART[id]}
    </svg>
  );
}
