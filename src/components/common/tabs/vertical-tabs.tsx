'use client'
import { Tab } from '../../../../types/common'
import ContentTab from './content'
import useTab from './hooks/useTab'

type Props = {
  tabs: Tab[]
}

const VerticalTab = ({ tabs }: Props) => {
  const { activeTab, handleTabClick } = useTab({ tabs })
  return (
    <div className="md:flex">
      <ul className="flex-column text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
        {tabs.map(({ title, icon, id }) => (
          <li key={id} onClick={() => handleTabClick(id)}>
            <a
              href="#"
              className={`inline-flex gap-[8px] first:border-0 items-center border-t-[1px] border-slate-800 px-8 py-4 ${activeTab === id ? "bg-black": ""} ${activeTab === id ? "text-white": "text-black"} w-full`}
              aria-current="page"
            >
              {icon}
              {title}
            </a>
          </li>
        ))}
      </ul>
      {tabs.map(({ id, content }) => (
        <ContentTab key={id} index={id} selectedIndex={activeTab}>
          {content}
        </ContentTab>
      ))}
    </div>
  )
}

export default VerticalTab
