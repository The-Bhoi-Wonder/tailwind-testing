'use client'
import { Menu } from '@headlessui/react'
import { HiOutlineMenu} from 'react-icons/hi'


function MyDropdown() {
  return (
    <Menu>
      <Menu.Button>
      <HiOutlineMenu size= {30} className=''/>
      </Menu.Button>
      <Menu.Items>
        <div className='px-1 py-1 flex flex-col gap-4 absolute rounded-lg border-red-950 border-4 bg-zinc-700 '>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active ? 'bg-red-950 rounded-lg p-[2px]':'bg-zinc-700 rounded-lg p-[1px]'
            } w-40 py-2`}
              href="/"
            >
              Home
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active ? 'bg-red-950 rounded-lg p-[2px]':'bg-zinc-700 rounded-lg p-[1px]'
            } w-40 py-2`}
              href="/photos"
            >
              Photos
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active ? 'bg-red-950 rounded-lg p-[2px]':'bg-zinc-700 rounded-lg p-[1px]'
            } w-40 py-2`}
              href="/products"
            >
              Products
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active ? 'bg-red-950 rounded-lg p-[2px]':'bg-zinc-700 rounded-lg p-[1px]'
            } w-40 py-2`}
              href="/updates"
            >
              Updates
            </a>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className="opacity-75"> (more coming soon!)</span>
        </Menu.Item>
            </div>
      </Menu.Items>
    </Menu>
  )
}
export default MyDropdown;