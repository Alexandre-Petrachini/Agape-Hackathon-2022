import React, { useRef } from 'react'
import { FileInfo } from './utils/FileInfo'

/*
Example of using
<div style={{ maxWidth: '300px' }}>
  <InputFile
    id="1"
    trigger={
      <Button
        onClick={() => null}
        text="Anexar arquivos"
        icon={<AiOutlinePlus style={{ color: '#ED1C24' }} />}
        style={{
          border: '1px solid #ED1C24',
          backgroundColor: '#FFF',
          color: '#ED1C24',
          fontWeight: '700',
          fontSize: '16px',
        }}
      />
    }
    callback={(file) => console.log('file:', file)}
  />
</div>
*/

interface Props {
  trigger: React.ReactNode
  onChooseFile?: () => void
  callback: (v: FileInfo) => void
  id: string
}

function InputFile(props: Props) {
  const { trigger, onChooseFile, callback, id } = props

  const onChangeFile = async (e: any) => {
    if (onChooseFile) onChooseFile()
    const file = new FileInfo(
      e.target.files[0],
      await FileInfo.initBase64(e.target.files[0])
    )
    callback(file)
  }

  const hiddenFileInput = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    hiddenFileInput?.current?.click()
  }
  return (
    <>
      <div onClick={handleClick}>{trigger}</div>
      <input
        className="input"
        data-testid="fileInput"
        accept="text/csv"
        type="file"
        id={id}
        ref={hiddenFileInput}
        onChange={(e) => {
          onChangeFile(e)
        }}
        style={{ display: 'none' }}
      />
    </>
  )
}

export default InputFile
