const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-80 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <div className="text-white">SIDEBAR!</div>
      </div>
      <main className="md:pl-80 text-black">
        CONTENT!
        {children}
        {/*<navbar/>*/}
      </main>
    </div>
  );
};

export default DashboardLayout;
