interface HomeBodyProps {
  children: any;
}

const HomeBody = ({ children }: HomeBodyProps) => {
  return (
    <section className="flex-1 flex flex-col items-center">
      <div className="p-2" />
      <div className="max-w-xl w-full grid auto-rows-[56px] gap-4">
        {children}
      </div>
    </section>
  );
};

export default HomeBody;
