'use client';
import { styled, alpha } from '@mui/material/styles';
import {
    Box,
    Stack,
    Button,
    Divider,
    Container,
    Typography,
    Unstable_Grid2 as Grid,
  } from '@mui/material';

const StyledRoot = styled(Stack)(({ theme }) => ({
    ...bgGradient({
      color: alpha(theme.palette.grey[900], 0.8),
      imgUrl: '/assets/background/overlay_2.jpg',
    }),
    overflow: 'hidden',
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('md')]: {
      minHeight: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: theme.spacing(15),
    },
  }));
  const StyledBar = styled(Stack)(({ theme }) => ({
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.up('md')]: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
  }));
  
  
  
const LandingHero = () => {
  return (
    <StyledRoot>
      <Container>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid xs={12} md={6} lg={5}>
            <Stack
              spacing={5}
              sx={{
                textAlign: { xs: 'center', md: 'unset' },
              }}
            >
              <Stack spacing={3}>
                <Typography variant="h1" sx={{ color: 'common.white' }}>
                  Get The
                  <Box component="span" sx={{ color: 'primary.main' }}>
                    {` Career `}
                  </Box>
                  You Deserve
                </Typography>

                <Typography sx={{ color: 'grey.500' }}>
                  Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis
                  venenatis ante odio sit amet eros.
                </Typography>
              </Stack>

              <StyledBar spacing={{ xs: 1, md: 0 }}>
                <CareerFilterKeyword
                  filterKeyword={filters.filterKeyword}
                  onChangeKeyword={handleChangeKeyword}
                  sx={{
                    bgcolor: 'transparent',
                    '&:hover, &.Mui-focused': { bgcolor: 'transparent' },
                  }}
                />

                {isMdUp && <Divider orientation="vertical" sx={{ height: 24 }} />}

                <CareerFilterLocations
                  filterLocation={filters.filterLocation}
                  onChangeLocation={handleChangeLocation}
                  sx={{
                    bgcolor: 'transparent',
                    '&:hover, &.Mui-focused': { bgcolor: 'transparent' },
                  }}
                />

                <Button
                  size="large"
                  variant="contained"
                  sx={{
                    px: 0,
                    minWidth: { xs: 1, md: 48 },
                  }}
                >
                  <Iconify icon="carbon:search" width={24} />
                </Button>
              </StyledBar>

              <BrandsSection />

              <SummarySection />
            </Stack>
          </Grid>

          {isMdUp && (
            <Grid xs={12} md={6} lg={6}>
              <CareerHeroIllustration />
            </Grid>
          )}
        </Grid>
      </Container>
    </StyledRoot>
    )
}

export default LandingHero