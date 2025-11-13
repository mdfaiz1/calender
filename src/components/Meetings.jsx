import { parseISO } from "date-fns";
import { format } from "date-fns";
import { Menu, Transition } from "@headlessui/react";
import { DotsVerticalIcon } from "@heroicons/react/outline";
import { Fragment, useState } from "react";
import AddMeetingModal from "./AddMeetingModel";

export function Meeting({ meeting }) {
  let startDateTime = parseISO(meeting.startDatetime);
  let endDateTime = parseISO(meeting.endDatetime);

  const [meetings, setMeetings] = useState([
    {
      title: "Leslie Alexander",
      startDatetime: "2025-05-11T13:00",
      endDatetime: "2025-05-11T14:30",
      color: "#FF5733",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddMeeting = newMeeting => {
    setMeetings(prev => [...prev, newMeeting]);
  };

  return (
    <div>
      <li className="flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100">
        <div
          className="flex-none w-10 h-10 rounded-full"
          style={{ backgroundColor: meeting.color }}
        ></div>
        <div className="flex-auto">
          <p className="text-gray-900">{meeting.title}</p>
          <p className="mt-0.5">
            <time dateTime={meeting.startDatetime}>
              {format(startDateTime, "h:mm a")}
            </time>{" "}
            -{" "}
            <time dateTime={meeting.endDatetime}>
              {format(endDateTime, "h:mm a")}
            </time>
          </p>
        </div>
        <Menu
          as="div"
          className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
        >
          <div>
            <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
              <span className="sr-only">Open options</span>
              <DotsVerticalIcon className="w-6 h-6" aria-hidden="true" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Edit
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Cancel
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </li>
    </div>
  );
}
