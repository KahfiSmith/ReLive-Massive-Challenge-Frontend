const ProfilDashboard = () => {
  return (
    <div className="flex-grow">
      <div className="relative w-full h-96 overflow-hidden">
        <div className="absolute w-full h-1/2 bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100"></div>
        <div className="absolute left-1/2 bottom-[120px] transform -translate-x-1/2 translate-y-2/5 w-40 h-40 bg-white rounded-full border-4 border-white z-10">
          <img
            src="/images/user.jpg"
            alt="Profile Image"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilDashboard;
