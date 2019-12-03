/*!
 * @author atongmu <zhounianlai@teacher.com.cn>
 * date 11/07/2019
 * description Export base http url by process.env.NODE_ENV.
 */

import config from "./index";

export default process.env.NODE_ENV === "development" ? config.baseUrl.dev : config.baseUrl.pro;