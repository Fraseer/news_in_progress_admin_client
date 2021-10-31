const toBase64 = (file) => 
new Promise((resolve, reject) => {
  const reader = newFileReader()
  reader.readAsDataURL(file)
  render.onload = () => {
    resolve(reader.result)
  }
  reader.onerror = (error) => {
    reject(error)
  }
})

export default toBase64