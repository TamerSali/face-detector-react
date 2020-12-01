/**
 * External Dependencies.
 */
import React from 'react'
/**
 * Internal Dependencies.
 */
import { TextField, Button } from '@material-ui/core'

export default function ImageLinkForm() {
    return (
        <div className="input-box">
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
        </div>
    )
}
