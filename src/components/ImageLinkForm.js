/**
 * External Dependencies.
 */
import React from 'react'
import PropTypes from 'prop-types'
/**
 * Internal Dependencies.
 */
import { TextField, Button, Box } from '@material-ui/core'

export default function ImageLinkForm({ onChange, userInput, onSubmit }) {
    return (
        <Box className="input-box" boxShadow={3}>
            <form >
                <TextField
                    id="filled-basic"
                    className="text-field"
                    label="Image URL"
                    variant="filled"
                    fullWidth
                    required
                    onChange={onChange}
                    value={userInput}
                />
                <Button
                    variant="contained"
                    className="detect-button"
                    size="small"
                    color="primary"
                    onClick={onSubmit}
                >
                    Detect
                </Button>
            </form>
        </Box>
    )
}
ImageLinkForm.propTypes = {

    /**
     * Input value.
     *
     * @type {String}
     */
    userInput: PropTypes.string,

    /**
     * Handle input change.
     *
     * @type  {Function}
     */
    onChange: PropTypes.func,

    /**
     * Handle user submit.
     *
     * @type  {Function}
     */
    onSubmit: PropTypes.func,
}