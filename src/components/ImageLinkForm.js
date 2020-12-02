/**
 * External Dependencies.
 */
import React from 'react'
/**
 * Internal Dependencies.
 */
import { TextField, Button, Box } from '@material-ui/core'

export default function ImageLinkForm() {
    return (
        <Box className="input-box" boxShadow={3}>
            <form>
                <TextField
                    className="text-field"
                    label="Image URL"
                    variant="filled"
                    fullWidth
                    required
                />
                <Button
                    variant="contained"
                    className="detect-button"
                    size="small"
                    color="primary"
                >
                    Detect The Faces
                </Button>
            </form>
        </Box>
    )
}
