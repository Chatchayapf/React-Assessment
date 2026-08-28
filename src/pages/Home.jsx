import { useState, useEffect } from "react";

export default function Home() {
  const [header, setHeader] = useState("React - Assessment");
  const [member, setMember] = useState([]);
  const [postMember, setPostMember] = useState({
    name: "",
    lastname: "",
    position: "",
  });

  useEffect(() => {
    fetchMembers();
  }, []);

  async function fetchMembers() {
    try {
      const response = await fetch(
        "https://67eca027aa794fb3222e43e2.mockapi.io/members",
      );
      const data = await response.json();
      setMember(data);
    } catch (err) {
      console.error(err);
    }
  }

  async function postMemberData(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://67eca027aa794fb3222e43e2.mockapi.io/members",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postMember),
        },
      );

      const data = await response.json();
      console.log("saved successfully", data);

      setPostMember({ name: "", lastname: "", position: "" });
      fetchMembers();
      alert("บันทึกข้อมูลสำเร็จ");
    } catch (err) {
      console.error(err);
    }
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setPostMember((item) => ({
      ...item,
      [name]: value,
    }));
  }

  async function deleteMember(id) {
    try {
      const response = await fetch(
        `https://67eca027aa794fb3222e43e2.mockapi.io/members/${id}`,
        {
          method: "DELETE",
        },
      );

      const data = await response.json();
      console.log("ลบข้อมูล", data);

      fetchMembers();
      alert("ลบข้อมูลสำเร็จ");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="bg-[#E7E8E7] ">
      <div className="flex flex-col justify-center items-center gap-8 p-16">
        <h1 className="text-4xl font-bold">Generation Thailand</h1>
        <h1 className="text-4xl font-bold">{header}</h1>

        <div className="flex gap-24">
          <button
            type="button"
            className="bg-[#e45bff] text-black px-4 py-2 rounded-md cursor-pointer"
            onClick={() => {
              setHeader("Home - User Section");
            }}
          >
            User Home Section
          </button>
          <button
            type="button"
            className="bg-[#e45bff] text-black px-4 py-2 rounded-md cursor-pointer"
            onClick={() => {
              setHeader("Home - Admin Section");
            }}
          >
            Admin Home Section
          </button>
        </div>

        {header.toLowerCase().includes("admin") ? (
          <div className="flex flex-col gap-4 mt-10 justify-center">
            <h1 className="font-bold text-2xl">Create User Here</h1>
            <form className="flex gap-8" onSubmit={postMemberData}>
              <input
                type="text"
                placeholder="Name"
                value={postMember.name}
                name="name"
                onChange={handleInputChange}
                className="bg-white px-4 py-2 rounded"
              ></input>
              <input
                type="text"
                placeholder="Last Name"
                value={postMember.lastname}
                name="lastname"
                onChange={handleInputChange}
                className="bg-white px-4 py-2 rounded"
              ></input>
              <input
                type="text"
                placeholder="Position"
                value={postMember.position}
                name="position"
                onChange={handleInputChange}
                className="bg-white px-4 py-2 rounded"
              ></input>
              <button
                className="bg-[#e45bff] text-black px-4 py-2 rounded cursor-pointer"
                type="submit"
              >
                Save
              </button>
            </form>
          </div>
        ) : (
          ""
        )}

        {header.toLowerCase().includes("react") ? (
          ""
        ) : (
          <div className="m-16">
            <table className="border-2 border-black table-fixed w-full">
              <thead className="bg-[#F0F0F0]">
                <tr>
                  <th>Name</th>
                  <th>Last Name</th>
                  <th>Position</th>
                  {header.toLowerCase().includes("admin") ? (
                    <th>Action</th>
                  ) : (
                    ""
                  )}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-x divide-gray-300">
                {member.map((item) => {
                  return (
                    <tr className="text-center divide-x divide-gray-300">
                      <td className="wrap-break-word">{item.name}</td>
                      <td className="wrap-break-word">{item.lastname}</td>
                      <td className="wrap-break-word">{item.position}</td>
                      {header.toLowerCase().includes("admin") ? (
                        <td>
                          <button
                            type="button"
                            className="text-red-500 font-bold cursor-pointer"
                            onClick={() => {
                              deleteMember(item.id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      ) : (
                        ""
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}