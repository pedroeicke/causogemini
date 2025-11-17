const MedicalCrossDecoration = () => {
  return (
    <>
      <div className="absolute top-10 left-10 text-9xl font-light text-secondary/8 animate-float select-none pointer-events-none">
        +
      </div>
      <div className="absolute top-1/4 right-20 text-8xl font-light text-secondary/6 animate-float select-none pointer-events-none" style={{ animationDelay: '1s' }}>
        +
      </div>
      <div className="absolute bottom-20 left-1/4 text-7xl font-light text-secondary/10 animate-float select-none pointer-events-none" style={{ animationDelay: '2s' }}>
        +
      </div>
      <div className="absolute bottom-1/3 right-10 text-9xl font-light text-secondary/7 animate-float select-none pointer-events-none" style={{ animationDelay: '3s' }}>
        +
      </div>
    </>
  );
};

export default MedicalCrossDecoration;
