interface HomeRootProps {
  children: any;
}

const HomeRoot = ({ children }: HomeRootProps) => {
  return <main className="flex flex-col min-h-screen">{children}</main>;
};

export default HomeRoot;
