type Props = {
  name: string;
};

const TagChip = ({ name }: Props) => {
  return (
    <>
      <span className="_container neon_text rounded pulsate p-1">{name}</span>
      <style jsx>{`
        ._container {
          --text-color: rgba(161, 255, 137, 0.774);
          --shadow-color: var(--cyber-green);
          border: 1px solid var(--text-color);
          box-shadow: 0 0 3px var(--text-color), 
          0 0 3px var(--text-color),
          0 0 2px var(--shadow-color), 
          0 0 2px var(--shadow-color),
          0 0 3px var(--shadow-color), 
          inset 0 0 2px var(--shadow-color);
        }
        .neon_text {
          color: var(--text-color);
          text-shadow: 0 0 7px var(--text-color), 0 0 10px var(--text-color),
            0 0 21px var(--text-color), 0 0 42px var(--shadow-color),
            0 0 82px var(--shadow-color), 0 0 92px var(--shadow-color),
            0 0 102px var(--shadow-color), 0 0 151px var(--shadow-color);
        }

        .pulsate {
          animation: pulsate 0.11s ease-in-out infinite alternate;
        }

        @keyframes pulsate {
          100% {
            text-shadow: 0 0 4px var(--text-color), 
            0 0 6px var(--text-color),
            0 0 8px var(--shadow-color);
          }

          0% {
            text-shadow: 0 0 2px var(--text-color), 
            0 0 4px var(--text-color),
            0 0 6px var(--shadow-color);
          }
        }
      `}</style>
    </>
  );
};
export default TagChip;
