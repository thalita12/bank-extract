import React from 'react';
import { Button, Container, FormControl, Input, InputAdornment } from '@material-ui/core';
import Search from '@material-ui/icons/Search';

const Filter = () => {
    return (
        <Container>
            <Button variant="contained" color="secondary">
                Tudo
            </Button>

            <Button color="secondary">
                Entrada
            </Button>

            <Button color="secondary">
                Saída
            </Button>

            <Button color="secondary">
                Futuro
            </Button>

            <FormControl>
                <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    }
                    placeholder="Pesquisa"
                />
            </FormControl>
        </Container>
    )
};

export default Filter;