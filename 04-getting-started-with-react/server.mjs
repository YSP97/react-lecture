// Node.js 런타임 환경에서 실행시킬 프로그램 작성 by Javascript
import liveServer from "live-server";

const params = {
  host: "localhost",
  port: 3000,
  root: ".",
  open: false,
  mount: [["/", "./public"]],
};

liveServer.start(params);
