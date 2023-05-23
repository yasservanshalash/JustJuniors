import PropTypes from 'prop-types';
// @mui
import { Typography, Stack, Container, Box, Paper, Button } from '@mui/material';
// components
import Iconify from 'app/components/iconify';
import SvgColor from 'app/components/svg-color';
import TextMaxLine from 'app/components/text-max-line';

// ----------------------------------------------------------------------

export default function CareerLandingHotCategories({ categories }) {
  return (
    <Container
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        Hot Categories
      </Typography>

      <Box
        sx={{
          gap: 4,
          display: 'grid',
          my: { xs: 8, md: 10 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </Box>

      <Stack alignItems="center">
        <Button
          color="inherit"
          size="large"
          variant="outlined"
          endIcon={<Iconify icon="carbon:chevron-right" />}
        >
          View All Categories
        </Button>
      </Stack>
    </Container>
  );
}

CareerLandingHotCategories.propTypes = {
  categories: PropTypes.array,
};

// ----------------------------------------------------------------------

function CategoryItem({ category }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        pt: '100%',
        borderRadius: 2,
        cursor: 'pointer',
        textAlign: 'center',
        position: 'relative',
        bgcolor: 'transparent',
        transition: (theme) => theme.transitions.create('all'),
        '&:hover': {
          bgcolor: 'background.paper',
          boxShadow: (theme) => theme.customShadows.z24,
          '& .icon': {
            bgcolor: 'primary.main',
            transition: (theme) => theme.transitions.create('all'),
            '& > span': {
              color: 'common.white',
            },
          },
        },
      }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          width: 1,
          height: 1,
          top: 0,
          position: 'absolute',
        }}
      >
        <Box
          className="icon"
          sx={{
            mb: 2.5,
            width: 72,
            height: 72,
            mx: 'auto',
            display: 'flex',
            borderRadius: '50%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <SvgColor app={category.icon} sx={{ width: 48, height: 48 }} />
        </Box>

        <TextMaxLine variant="h6" line={1}>
          {category.name}
        </TextMaxLine>

        <Typography variant="body2" sx={{ color: 'text.disabled', mt: 0.5 }}>
          {category.totalJobs} jobs
        </Typography>
      </Stack>
    </Paper>
  );
}

CategoryItem.propTypes = {
  category: PropTypes.shape({
    icon: PropTypes.node,
    name: PropTypes.string,
    totalJobs: PropTypes.number,
  }),
};
