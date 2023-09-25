import { Modal } from 'rsuite';
import { useModalSate } from '../../../misc/custom-hooks';

const ImageBtnModal = ({ src, fileName }) => {
  const { isOpen, open, close } = useModalSate();
  return (
    <>
      <input
        type="image"
        src={src}
        alt="file"
        onClick={open}
        className="mw-100 mh-100 w-auto"
      />
      <Modal show={isOpen} onHide={close}>
        <Modal.Header>
          <Modal.Title>{fileName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <img src={src} height="100%" alt="file" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <a href={src} target="_blank" rel="noopener noreferrer">
            View original
          </a>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ImageBtnModal;