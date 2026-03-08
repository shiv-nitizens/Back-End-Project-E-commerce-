import user from "../data/user.json";

function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      
      <div className="bg-white shadow-lg rounded-xl p-8 w-96">
        
        <h1 className="text-2xl font-bold mb-4">
          {user.name}
        </h1>

        <p className="text-gray-600">
          Email: {user.email}
        </p>

        <p className="text-gray-600">
          Phone: {user.phone}
        </p>

        <p className="text-gray-600">
          Address: {user.address}
        </p>

      </div>

    </div>
  );
}

export default Profile;