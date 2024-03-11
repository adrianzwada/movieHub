import {Modal} from './Modal'

export default function WatchModal() {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return <Modal>{watchid}</Modal>
};
