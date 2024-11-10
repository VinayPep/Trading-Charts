const Shimmer = () => {
  return (
    <div className="max-w-sm mx-auto">
      <div className="animate-pulse space-y-4">
        <div className="h-12 bg-gray-300 rounded-md w-full"></div>

        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded-md w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded-md w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded-md w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
