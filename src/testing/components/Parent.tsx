import { ChildAsFC } from './Child'

const Parent = () => {
    return <ChildAsFC color='red' onClick={() => console.log('Child clicked')}>
        PassAsChildrenProps
    </ChildAsFC>
};

export default Parent;