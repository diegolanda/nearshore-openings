import React, { useEffect, useState } from 'react'
import { useGHStContext } from '../utils/ContextProvider'
import InputField from './ui/InputField'
import { useTranslation } from 'react-i18next'

const CustomForm = ({ status, message, onValidated }) => {
  const { modalOpen} = useGHStContext()
  const [email, setEmail] = useState('')
  const { t } = useTranslation()
  const handleSubmit = (e) => {
    e.preventDefault()

    email.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email,
      })
  }

  useEffect(() => {
    if (status === 'success') clearFields()
    if (modalOpen && status === 'success') clearFields()
  }, [status, modalOpen])

  const clearFields = () => {
    setEmail('')
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {status === 'sending' && <div>sending...</div>}
      {status === 'error' && (
        <div
          className="text-red-600"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <div
          className="text-green-600"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      {status !== 'success' ? (
        <div className="flex">
          <InputField
            onChangeHandler={setEmail}
            type="email"
            value={email}
            className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm"
            placeholder={t('actions.email')}
            isRequired
          />
          <button
            type="submit"
            aria-label="Subscribe"
            onClick={handleSubmit}
            className="border rounded border-green-600"
          >
            <span
              className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300"
              aria-hidden="true"
            ></span>
            <svg
              className="w-3 h-3 fill-current text-green-600 mx-3 flex-shrink-0"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                fillRule="nonzero"
              />
            </svg>
          </button>
        </div>
      ) : null}
    </form>
  )
}

export default CustomForm
