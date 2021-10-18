import React, { useRef } from 'react'

export const Camera = (props) => {
    const ref = useRef()
    const { setDefaultCamera } = useThree()

    useEffect(() => {
        setDefaultCamera(ref.current)
    }, [])

    return (
        <div>
          <perspectiveCamera ref={ref} {...props} />  
        </div>
    )
}
