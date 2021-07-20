import React, { forwardRef, ReactElement } from 'react'
import { useSpring, animated } from '@react-spring/web'


interface Props {

    children?: ReactElement

    in: boolean
    
    onEnter?: () => {}
    
    onExited?: () => {}

}


const Fade = forwardRef<HTMLDivElement, Props>((props, ref) => {
    
    const { in: open, children, onEnter, onExited, ...other } = props
    
    const style = useSpring({
      
        from: { opacity: 0 },

        to: { opacity: open ? 1 : 0 },
        
        onStart: () => {
          
            if (open && onEnter) {
            
                onEnter()
          
            }
        },

        onRest: () => {
        
            if (!open && onExited) {
          
                onExited()

            }

        },

    })

    return (

        <animated.div ref={ ref } style={ style } { ...other }>

            { children }
      
        </animated.div>
    
    )

})


export default Fade
