

import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

function Cart4() {
    return (
        <div>
            <Box m="15px" display={{base:"none", md:"block", lg:"block"}} marginLeft={"70px"}  >
                <SimpleGrid columns={[1, 2, 3]} spacing='20px'>
                    <Box>
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/61e0d82c7c5e5a64.jpg?q=50" alt={"im"}/>
                    </Box>
                    
                    <Box>
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/a2c7cb046d74a47a.jpg?q=50" alt={"im"} />
                    </Box>
                    <Box>
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/f44610f5a9e064e0.jpg?q=50" alt={"im"} />
                    </Box>
                    <Box>
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/3f235f1e7b32a1cc.jpg?q=50" alt={"im"} />
                    </Box>
                    <Box>
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/72fe223314a9419e.jpg?q=50" alt={"im"} />
                    </Box>
                    <Box>
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/c20e33ae7be807ef.jpg?q=50" alt={"im"} />
                    </Box>
                </SimpleGrid>
            </Box>
        </div>
    );
}

export default Cart4;