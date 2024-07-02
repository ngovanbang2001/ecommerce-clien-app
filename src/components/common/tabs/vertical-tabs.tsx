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
      <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
        {tabs.map(({ title, icon, id }) => (
          <li key={id} onClick={() => handleTabClick(id)}>
            <a
              href="#"
              className={`inline-flex gap-[8px] items-center px-4 py-3 text-white ${activeTab ? "bg-blue-700" : "bg-gray-800"} rounded-lg w-full`}
              aria-current="page"
            >
              {icon}
              {title}
            </a>
          </li>
        ))}
      </ul>
      {tabs.map(({id}, content) => (
        <ContentTab key={id} index={id} selectedIndex={activeTab}>
          {content}
        </ContentTab>
      ))}
    </div>
  )
}

export default VerticalTab
