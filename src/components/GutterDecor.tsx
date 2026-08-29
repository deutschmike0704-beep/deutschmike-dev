export default function GutterDecor({ side }: { side: "left" | "right" }) {
  const isLeft = side === "left";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-y-0 z-0 hidden overflow-hidden lg:block ${
        isLeft ? "left-0 border-r" : "right-0 border-l"
      } border-foreground/10`}
      style={{ width: "calc(50% - 28rem)" }}
    >
      <div className="dot-grid absolute inset-0" />
      <div
        className={`absolute top-[15%] h-64 w-64 rounded-full bg-accent/20 blur-[90px] ${
          isLeft ? "-left-24" : "-right-24"
        }`}
      />
      <div
        className={`absolute bottom-[20%] h-56 w-56 rounded-full bg-accent-2/20 blur-[90px] ${
          isLeft ? "-left-16" : "-right-16"
        }`}
      />
    </div>
  );
}
