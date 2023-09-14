import React, { useState } from 'react'
import { Box, Typography, Button, Dialog, DialogTitle, DialogContent, Input, FormLabel } from '@mui/material'
import Icon from 'src/@core/components/icon'
import ExamsTable from '../../views/exams/ExamTable'

function Index() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const [selectedFile, setSelectedFile] = React.useState(null)

  const handleCapture = ({ target }) => {
    setSelectedFile(target.files[0])
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: '20px'
        }}
      >
        <Typography
          sx={{
            fontSize: '24px',
            fontWeight: 700
          }}
        >
          Exams
        </Typography>
        <Button variant='contained' size='small' startIcon={<Icon icon='material-symbols:add' />} onClick={handleOpen}>
          Create Permissions
        </Button>
      </Box>
      <ExamsTable />
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiDialog-container': {
            '& .MuiPaper-root': {
              width: '100%'
            }
          }
        }}
      >
        <DialogTitle
          sx={{
            textAlign: 'center',
            fontSize: '24px',
            fontWeight: 700
          }}
        >
          Create Exams
        </DialogTitle>
        <DialogContent>
          <Box>
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: 700,
                marginBottom: '10px'
              }}
            >
              Choose your file
            </Typography>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                border: '1px solid #DDD'
              }}
            >
              <Input
                accept='/*'
                fullWidth
                style={{ display: 'none' }}
                id='upload-file-button'
                onChange={handleCapture}
                type='file'
              />
              <FormLabel
                htmlFor='upload-file-button'
                style={{
                  width: '100%'
                }}
              >
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: 400,
                    padding: '14px 20px',
                    color: '#7D7D7D'
                  }}
                >
                  {selectedFile ? selectedFile.name : 'No file chosen'}
                </Typography>
              </FormLabel>
              <Button
                variant='outlined'
                size='small'
                onClick={handleClose}
                component='span'
                sx={{
                  p: '14px',
                  minWidth: 125,
                  p: '9px !Important',
                  fontSize: '20px',
                  color: theme => theme.palette.text.primary,
                  borderColor: theme => theme.palette.text.primary,
                  backgroundColor: '#E7F2F9',
                  lineHeight: '30px'
                }}
              >
                Import
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Index
