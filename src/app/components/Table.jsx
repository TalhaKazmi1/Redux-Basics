import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSharedDispatcher, useSharedSelector, actionAPI } from '../../shared'

function Table() {
    const [user,setUser] = useState([]);
    const dispatcher = useSharedDispatcher()
    useEffect(() => {
      dispatcher(actionAPI.getUsers())
    }, [])
    const { users, usersLoading, usersError, usersErrorMessage } = useSharedSelector((state) => state.UserData)
    useEffect(() => {
      if(users){
        setUser(users)
      }
    }, [users])
  return (
    <div className="flex flex-col">
      <div className="sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div>
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-4 py-4">
                    ID
                  </th>
                  <th scope="col" className="px-4 py-4">
                    Name
                  </th>
                  <th scope="col" className="px-4 py-4">
                    User Name
                  </th>
                  <th scope="col" className="px-4 py-4">
                    City
                  </th>
                  <th scope="col" className="px-4 py-4">
                    Phone
                  </th>
                  <th scope="col" className="px-4 py-4">
                    Website
                  </th>
                  <th scope="col" className="px-4 py-4">
                    Company
                  </th>
                  <th scope="col" className="px-4 py-4">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {user.map((user, index) => {
                  return (
                    <tr
                      className="border-b dark:border-neutral-500"
                      key={index}
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {user.id}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user.username}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user.address.city}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user.phone}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user.website}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user.company.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 space-x-5">
                        <button className="bg-blue-300 rounded-sm px-2">
                          View
                        </button>
                        <button className="bg-yellow-300 rounded-sm px-2">
                          Edit
                        </button>
                        <button className="bg-red-300 rounded-sm px-2">
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table