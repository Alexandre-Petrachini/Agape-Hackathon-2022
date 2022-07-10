export class FileInfo extends File {
  base64: string | unknown

  constructor(props: File, base64: string | unknown) {
    super([props], props.name)
    this.base64 = base64
  }

  public static async initBase64(file: File): Promise<string | unknown> {
    const convertBase64 = (f: any) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(f)

        fileReader.onload = () => {
          resolve(fileReader.result)
        }

        fileReader.onerror = (error) => {
          reject(error)
        }
      })
    }

    const base64 = await convertBase64(file)
    return base64
  }

  getName = () => {
    return this.name
  }

  getSize = () => {
    return this.size
  }

  getBase64 = () => {
    return this.base64
  }
}
