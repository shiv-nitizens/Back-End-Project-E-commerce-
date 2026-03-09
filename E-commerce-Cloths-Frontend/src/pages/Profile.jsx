import user from "../data/user.json";

function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 flex pt-24">

      {/* Sidebar */}
      <div className="w-72 bg-white shadow-md p-8 rounded-lg">

  <h2 className="text-2xl font-bold mb-10">
    My Account
  </h2>

  <ul className="flex flex-col gap-8 text-lg font-medium">

    <li className="cursor-pointer hover:text-black text-gray-600 transition">
      Profile
    </li>

    <li className="cursor-pointer hover:text-black text-gray-600 transition">
      Orders
    </li>

    <li className="cursor-pointer hover:text-black text-gray-600 transition">
      Addresses
    </li>

    <li className="cursor-pointer hover:text-red-500 text-gray-600 transition">
      Logout
    </li>

  </ul>

</div>
      {/* Profile Content */}
      <div className="flex-1 p-10">

        <div className="bg-white shadow-lg rounded-xl p-8 max-w-xl">

          <h1 className="text-2xl font-bold mb-6">Profile Information</h1>

          <div className="space-y-4">

            <div>
              <p className="text-gray-500 text-sm">Name</p>
              <p className="text-lg">{user.name}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <p className="text-lg">{user.email}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Phone</p>
              <p className="text-lg">{user.phone}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Address</p>
              <p className="text-lg">{user.address}</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;