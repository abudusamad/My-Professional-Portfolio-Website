interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="mx-auto xl:px-10 md:px-10 sm:px-2 px-4 text-white">
      {children}
    </div>
  );
};
