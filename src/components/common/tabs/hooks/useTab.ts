'use client'

import { useState } from "react"
import { Tab } from "../../../../../types/common"

type Props = {
  tabs: Tab[]
}

const useTab = ({ tabs }: Props) => {

  const [activeTab, setActiveTab] = useState(tabs[0]?.id)

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId)
  }

  return {
    activeTab,
    handleTabClick
  }
}

export default useTab;