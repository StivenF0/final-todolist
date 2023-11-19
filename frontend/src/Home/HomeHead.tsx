interface HomeHeadProps {
  children: any;
}

const HomeHead = ({ children }: HomeHeadProps) => {
  return (
    <section className="bg-neutral-300 h-48 flex items-center flex-col">
      <div className="p-6" />
      <h2 className="text-neutral-800 text-4xl font-extrabold tracking-wider">
        Final To-do List
      </h2>
      <div className="p-4" />
      {children}
    </section>
  );
};

export default HomeHead;
