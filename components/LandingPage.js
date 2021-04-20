import React from 'react'
import styled from 'styled-components'

const BannerImg = styled.img`
width: 30rem;
`

function LandingPage() {
    return (
        <div>
            <BannerImg src="https://images.unsplash.com/photo-1612229693210-30e16029c415?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"/>
        </div>
    )
}

export default LandingPage
