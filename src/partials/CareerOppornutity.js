import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import CustomModal from '../components/Modal'

const CareerOppornutity = ({ data }) => {
  const [showModal, setShowModal] = useState(false)

  const handleModal = (value) => {
    setShowModal(value)
  }

  const { t } = useTranslation()
  return (
    <div className="flex-col content-start text-center p-2 bg-white border-2 rounded-xl h-38 items-center">
      <h4 className="text-lg ">{data.MainSkill}</h4>
      <span className=" text-green-700 text-sm">{data.JobTitle}</span>
      <h4 className="text-xp pb-1.5">{data.Seniority}</h4>

      <button
        class="bg-green-500 hover:bg-green-700 text-white font-normal m-1.5 py-1 px-4 rounded-full"
        onClick={() => handleModal(true)}
      >
        {t('actions.view')}
      </button>
      <button
        class="bg-gray-500 hover:bg-gray-700 text-white font-normal m-1.5 py-1 px-4 rounded-full"
        onClick={() =>
          (window.location = `mailto:careers@nearshorecode.com?subject=${data.CareerOpportunityId} - ${data.JobTitle}`)
        }
      >
        {t('actions.apply')}
      </button>

      <CustomModal
        showModal={showModal}
        handleModal={handleModal}
        data={data}
      />
    </div>
  )
}

export default CareerOppornutity
