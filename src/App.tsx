import { useEffect, useState } from 'react';
import { storage } from './libs/firebase';
import { ref, getDownloadURL, uploadBytes, listAll, deleteObject } from "firebase/storage";
import { StorageReference } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import * as C from "./styled-app";

function App() {

  const iconDelete = require("./assets/icons/delete.png")

  const list: string[] = []
  const id = uuidv4()

  const [nameImage, setNameImage] = useState<StorageReference[]>([])
  const [url, setUrl] = useState<string[]>([])

  const pathReferenceUpload = ref(storage, `images/${id}`)
  const pathReferenceDownload = ref(storage, "/images")

  const handleDelete = (item: string) => {
    const deleteRef = ref(storage, item)
    deleteObject(deleteRef).then(() => {
      alert("imagem deletada")
    }).then(() => DownloadImage())
  }

  const DownloadImage = async () => {

    const listReference = await listAll(pathReferenceDownload)
    const itemsReference = listReference.items

    Promise.all(itemsReference.map(async (item) => {
      return getDownloadURL(item)
    })).then((item1) => list.push(...item1)).then(() => setUrl([...list]))

    if (itemsReference !== undefined) setNameImage(itemsReference)

  }

  const handleUpload = (fileList: FileList | null) => {
    if (fileList === null) return
    const file = fileList[0]
    if (url === null) return
    uploadBytes(pathReferenceUpload, file).then(() => {
      alert('Uploaded a blob or file!');
      DownloadImage()
    });
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { DownloadImage() }, [])

  return (
    <C.AreaTotal>
      <C.AreaConteudo>
        <C.Header>
          <C.H1>Galeria de Fotos</C.H1>
        </C.Header>
        <C.ContainerInputFile>
          <C.InputFile type="file" onChange={(e) => handleUpload(e.target.files)} name="img" accept="image/*">
          </C.InputFile>
          <C.ButtonSend >
            Enviar
          </C.ButtonSend>
        </C.ContainerInputFile>
        <C.ContainerFotos>
          {url.map((itemUrl, index) => (
            <C.ContainerImagem key={index} title="Button Delete">
              <C.Image src={itemUrl} />
              <C.ContainerLegendaButton className='container-legenda-button' >
                {nameImage[index]?.name && <C.LegendaPhoto>{nameImage[index]?.name || ""}</C.LegendaPhoto>}
                <C.buttonDelete onClick={() =>
                  handleDelete(itemUrl)}>
                  <C.ImageIcon src={iconDelete} height={"95%"} />
                </C.buttonDelete>
              </C.ContainerLegendaButton>
            </C.ContainerImagem>
          ))}
        </C.ContainerFotos>
      </C.AreaConteudo>
    </C.AreaTotal>
  );
}

export default App;
