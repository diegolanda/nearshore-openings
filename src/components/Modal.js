import React from 'react'
import { useTranslation } from 'react-i18next'

const CustomModal = ({ showModal, handleModal, data }) => {
  const { t } = useTranslation()
  return (
    <>
      {showModal ? (
        <>
          <div className="overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-5 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-8 border-green-500 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className=" p-5 border-b border-solid border-blueGray-200 rounded-t text-green-700">
                  <h3 className="text-3xl font-semibold content-center text-center ">
                    {data.JobTitle}
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-5 flex-auto">
                  <p className="my-0 text-blueGray-500 text-lg leading-relaxed text-left text-justify  ">
                    <h4 white-space break-spaces>
                      <strong>- Date Created:</strong> {data.DateCreated}
                    </h4>
                    <h4 white-space break-spaces>
                      <strong>- Desired Criteria:</strong>{' '}
                      {data.DesiredCriteria}
                    </h4>
                    <h4 white-space break-spaces>
                      <strong>- Job Description:</strong> {data.JobDescription}
                    </h4>
                    <h4 white-space break-spaces>
                      <strong>- Main Skill: </strong>
                      {data.MainSkill}
                    </h4>
                    <h4 white-space break-spaces>
                      <strong>- Seniority: </strong>
                      {data.Seniority}
                    </h4>
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-3 border-t border-solid border-blueGray-500 rounded-b">
                  <button
                    class="bg-green-500 hover:bg-green-700 text-white font-normal m-1.5 py-1 px-4 rounded-full"
                    onClick={() =>
                      (window.location = `mailto:careers@nearshorecode.com?subject=${data.CareerOpportunityId} - ${data.JobTitle}`)
                    }
                  >
                    {t('actions.apply')}
                  </button>
                  <button
                    className="bg-gray-500 hover:bg-gray-700 text-white font-normal m-1.5 py-1 px-4 rounded-full"
                    type="button"
                    onClick={() => handleModal(false)}
                  >
                    {t('actions.close')}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default CustomModal
