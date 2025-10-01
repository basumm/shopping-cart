import styled from "styled-components";

export const HeaderStyles = styled.div`

background-color: #eeeee4;
color: #000000;

.logo {
    padding: 0;
}

.nav-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;

    .logo-wrapper {
        .brand-name {
        }
    }

    .nav {
        .nave-item {
            display: flex;

            .nav-link {
                color: #000000;
                text-decoration: none;
                padding: 10px 20px;
            }
        }
    }
}


`