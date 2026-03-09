"use client"
import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Accordian = () => {

    const [activeAccordian, setactiveAccordian] = useState({});
    const handleAccordian = (index) => {

        setactiveAccordian((prev) => {
            if (!prev[index]) {
                return { [index]: true }
            } else {
                return {}
            }

        })
    }
    useEffect(() => {
        console.log(activeAccordian);


    }, [activeAccordian])


    return (
        <>
            {
                [1, 23, 4].map((_, index) => {
                    return (
                        <div key={_} onClick={() => handleAccordian(index)}>
                            <Box sx={{ mt: 3, borderTop: '1px solid red', pt: 2 }}>
                                <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Specification</Typography>
                                <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                                    Headset
                                </Typography>
                                {
                                    activeAccordian[index] ? <ul style={{ paddingLeft: '20px', margin: 0, listStyleType: 'disc' }}>
                                        <li>Speaker Unit: 50 mm</li>
                                        <li>Frequency Response: 20 Hz – 20 kHz</li>
                                        <li>Sensitivity: 115 dB</li>
                                        <li>Impedance: 16 ohm</li>
                                        <li>Microphone</li>
                                        <li>Frequency Response: 100 Hz – 10 kHz</li>
                                        <li>Sensitivity: -42 dB</li>
                                        <li>Cable</li>
                                        <li>Cable Length: 200 cm</li>
                                        <li>Port: USB Plug</li>
                                    </ul> : null
                                }

                            </Box>
                        </div>
                    )
                })
            }

        </>
    )
}

export default Accordian
