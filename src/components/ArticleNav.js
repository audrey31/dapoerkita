import * as React from "react";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { BottomNavigationAction, BottomNavigation } from "@mui/material";
import { Box } from "@mui/system";

const ArticleNav = () => {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <Paper
        sx={{ position: "fixed", top: 0, left: 0, right: 0 }}
        elevation={1}
      >
        <Box>
          <BottomNavigation showLabels value={value}>
            <BottomNavigationAction
              label="Video"
              component={Link}
              to="/blog-list"
            />
            <BottomNavigationAction
              label="Artikel"
              component={Link}
              to="/article-list"
            />
          </BottomNavigation>
        </Box>
      </Paper>
    </>
  );
};

export default ArticleNav;
