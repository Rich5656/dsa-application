import { FC } from 'react';


export const NodeDisplay: FC = () => {
  return (
    <>
        <div className="tree">
            <ul>
                <li>
                    <a href="#">Root node</a>
                    <ul>
                        <li>
                            <a href="#">left child</a>
                            <ul>
                                <li>
                                    <a href="#">2.1</a>
                    
                                </li>
                                <li>
                                    <a href="#">2.2</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">right child</a>
                            <ul>
                                <ul>
                    <li>
                                    <a href="#">3.1</a>
                    <ul>
                    <li>
                                    <a href="#">3.1.1</a>
                                </li>
                                <li>
                                    <a href="#">3.1.2</a>
                                </li>
                            </ul>
                                </li>
                                <li>
                                    <a href="#">3.2</a>
                                </li>
                            </ul>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </>
  )
}
