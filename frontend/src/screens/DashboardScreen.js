import React, { useContext, useEffect, useReducer } from "react";
import Chart from "react-google-charts";
import axios from "axios";
import { Store } from "../Store";
import { getError } from "../utils";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return {
        ...state,
        summary: action.payload,
        loading: false,
      };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export default function DashboardScreen() {
  const [{ loading, summary, error }, dispatch] = useReducer(reducer, {
    loading: true,
    error: "",
  });
  const { state } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/orders/summary", {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({
          type: "FETCH_FAIL",
          payload: getError(err),
        });
      }
    };
    fetchData();
  }, [userInfo]);

  return (
    <div>
      <div className="w-full bg-slate-100 shadow-sm h-20 text-center mt-5 mb-5 ml-2">
        <h1 className="text-cyan-600 text-4xl uppercase font-serif font-bold pt-4">
          Dashboard
        </h1>
      </div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {/* <Row>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>
                    {summary.users && summary.users[0]
                      ? summary.users[0].numUsers
                      : 0}
                  </Card.Title>
                  <Card.Text> Users</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>
                    {summary.orders && summary.users[0]
                      ? summary.orders[0].numOrders
                      : 0}
                  </Card.Title>
                  <Card.Text> Orders</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>
                    ₹
                    {summary.orders && summary.users[0]
                      ? summary.orders[0].totalSales.toFixed(2)
                      : 0}
                  </Card.Title>
                  <Card.Text> Orders</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="my-3">
            <h2>Sales</h2>
            {summary.dailyOrders.length === 0 ? (
              <MessageBox>No Sale</MessageBox>
            ) : (
              <Chart
                width="100%"
                height="400px"
                chartType="AreaChart"
                loader={<div>Loading Chart...</div>}
                data={[
                  ["Date", "Sales"],
                  ...summary.dailyOrders.map((x) => [x._id, x.sales]),
                ]}
              ></Chart>
            )}
          </div>
          <div className="my-3">
            <h2>Categories</h2>
            {summary.productCategories.length === 0 ? (
              <MessageBox>No Category</MessageBox>
            ) : (
              <Chart
                width="100%"
                height="400px"
                chartType="PieChart"
                loader={<div>Loading Chart...</div>}
                data={[
                  ["Category", "Products"],
                  ...summary.productCategories.map((x) => [x._id, x.count]),
                ]}
              ></Chart>
            )}
          </div> */}

          <div>
            <div
              id="main-content"
              class="h-full w-full bg-gray-50 relative overflow-y-auto overflow-x-auto"
            >
              <main className="overflow-x-auto pl-6">
                <div class="pt-6 px-4">
                  <div class="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                    <div class="bg-white shadow rounded-lg rounded-l-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
                      <div class="flex items-center justify-between mb-4">
                        <div class="flex-shrink-0">
                          <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                            ₹
                            {summary.orders && summary.users[0]
                              ? summary.orders[0].totalSales.toFixed(2)
                              : 0}
                          </span>
                          <h3 class="text-base font-normal text-gray-500">
                            Sales of Products
                          </h3>
                        </div>
                      </div>
                      <div id="main-chart"></div>
                    </div>
                    <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                      <div class="mb-4 flex items-center justify-between">
                        <div>
                          <h3 class="text-xl font-bold text-gray-900 mb-2">
                            Latest Transactions
                          </h3>
                          <span class="text-base font-normal text-gray-500">
                            This is a list of transactions
                          </span>
                        </div>
                        <div class="flex-shrink-0">
                          <a
                            href="#"
                            class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2"
                          >
                            View all
                          </a>
                        </div>
                      </div>
                      <div class="flex flex-col mt-8">
                        <div class="overflow-x-auto rounded-lg">
                          <div class="align-middle inline-block min-w-full">
                            <div class="shadow overflow-hidden sm:rounded-lg">
                              <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-50">
                                  <tr>
                                    <th
                                      scope="col"
                                      class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                      Transaction
                                    </th>
                                    <th
                                      scope="col"
                                      class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                      Date & Time
                                    </th>
                                    <th
                                      scope="col"
                                      class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                      Amount
                                    </th>
                                  </tr>
                                </thead>
                                <tbody class="bg-white">
                                  <tr>
                                    <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                      Payment from{" "}
                                      <span class="font-semibold">
                                        Bonnie Green
                                      </span>
                                    </td>
                                    <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                      Apr 23 ,2021
                                    </td>
                                    <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                      $2300
                                    </td>
                                  </tr>
                                  <tr class="bg-gray-50">
                                    <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                                      Payment refund to{" "}
                                      <span class="font-semibold">#00910</span>
                                    </td>
                                    <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                      Apr 23 ,2021
                                    </td>
                                    <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                      -$670
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                      Payment failed from{" "}
                                      <span class="font-semibold">#087651</span>
                                    </td>
                                    <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                      Apr 18 ,2021
                                    </td>
                                    <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                      $234
                                    </td>
                                  </tr>
                                  <tr class="bg-gray-50">
                                    <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                                      Payment from{" "}
                                      <span class="font-semibold">
                                        Lana Byrd
                                      </span>
                                    </td>
                                    <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                      Apr 15 ,2021
                                    </td>
                                    <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                      $5000
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                      Payment from{" "}
                                      <span class="font-semibold">
                                        Jese Leos
                                      </span>
                                    </td>
                                    <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                      Apr 15 ,2021
                                    </td>
                                    <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                      $2300
                                    </td>
                                  </tr>
                                  <tr class="bg-gray-50">
                                    <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                                      Payment from{" "}
                                      <span class="font-semibold">
                                        THEMESBERG LLC
                                      </span>
                                    </td>
                                    <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                      Apr 11 ,2021
                                    </td>
                                    <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                      $560
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                      Payment from{" "}
                                      <span class="font-semibold">
                                        Lana Lysle
                                      </span>
                                    </td>
                                    <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                      Apr 6 ,2021
                                    </td>
                                    <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                      $1437
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                      <div class="flex items-center justify-between">
                        <div class="flex-shrink-0">
                          <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                            2,340
                          </span>
                          <h3 class="text-base font-normal text-gray-500">
                            New products this week
                          </h3>
                        </div>
                        <div>
                          <img src="https://img.icons8.com/?size=512&id=8386&format=png" className="w-14"/>
                        </div>
                      </div>
                    </div>
                    <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                      <div class="flex items-center justify-between">
                        <div class="flex-shrink-0">
                          <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                            {summary.orders && summary.users[0]
                              ? summary.orders[0].numOrders
                              : 0}
                          </span>
                          <h3 class="text-base font-normal text-gray-500">
                            Orders
                          </h3>
                        </div>
                        <div>
                          <img src="https://img.icons8.com/?size=512&id=59997&format=png" className="w-14" />
                        </div>
                      </div>
                    </div>
                    <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                      <div class="flex items-center justify-between">
                        <div class="flex-shrink-0">
                          <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                            385
                          </span>
                          <h3 class="text-base font-normal text-gray-500">
                            User signups this week
                          </h3>
                        </div>
                        <div>
                          <img src="https://img.icons8.com/?size=512&id=ABBSjQJK83zf&format=png" className="w-14" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
                    <div class="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
                      <div class="flex items-center justify-between mb-4">
                        <h3 class="text-xl font-bold leading-none text-gray-900">
                          Latest Customers
                        </h3>
                        <a
                          href="#"
                          class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
                        >
                          View all
                        </a>
                      </div>
                      <div class="flow-root">
                        <ul role="list" class="divide-y divide-gray-200">
                          <li class="py-3 sm:py-4">
                            <div class="flex items-center space-x-4">
                              <div class="flex-shrink-0">
                                <img
                                  class="h-8 w-8 rounded-full"
                                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                                  alt="Neil image"
                                />
                              </div>
                              <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium text-gray-900 truncate">
                                  Neil Sims
                                </p>
                                <p class="text-sm text-gray-500 truncate">
                                  <a
                                    href="/cdn-cgi/l/email-protection"
                                    class="__cf_email__"
                                    data-cfemail="17727a767e7b57607e7973646372653974787a"
                                  >
                                    [email&#160;protected]
                                  </a>
                                </p>
                              </div>
                              <div class="inline-flex items-center text-base font-semibold text-gray-900">
                                ₹320
                              </div>
                            </div>
                          </li>
                          <li class="py-3 sm:py-4">
                            <div class="flex items-center space-x-4">
                              <div class="flex-shrink-0">
                                <img
                                  class="h-8 w-8 rounded-full"
                                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                                  alt="Neil image"
                                />
                              </div>
                              <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium text-gray-900 truncate">
                                  Bonnie Green
                                </p>
                                <p class="text-sm text-gray-500 truncate">
                                  <a
                                    href="/cdn-cgi/l/email-protection"
                                    class="__cf_email__"
                                    data-cfemail="d4b1b9b5bdb894a3bdbab0a7a0b1a6fab7bbb9"
                                  >
                                    [email&#160;protected]
                                  </a>
                                </p>
                              </div>
                              <div class="inline-flex items-center text-base font-semibold text-gray-900">
                                ₹3467
                              </div>
                            </div>
                          </li>
                          <li class="py-3 sm:py-4">
                            <div class="flex items-center space-x-4">
                              <div class="flex-shrink-0">
                                <img
                                  class="h-8 w-8 rounded-full"
                                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                                  alt="Neil image"
                                />
                              </div>
                              <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium text-gray-900 truncate">
                                  Michael Gough
                                </p>
                                <p class="text-sm text-gray-500 truncate">
                                  <a
                                    href="/cdn-cgi/l/email-protection"
                                    class="__cf_email__"
                                    data-cfemail="57323a363e3b17203e3933242332257934383a"
                                  >
                                    [email&#160;protected]
                                  </a>
                                </p>
                              </div>
                              <div class="inline-flex items-center text-base font-semibold text-gray-900">
                                ₹67
                              </div>
                            </div>
                          </li>
                          <li class="py-3 sm:py-4">
                            <div class="flex items-center space-x-4">
                              <div class="flex-shrink-0">
                                <img
                                  class="h-8 w-8 rounded-full"
                                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                                  alt="Neil image"
                                />
                              </div>
                              <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium text-gray-900 truncate">
                                  Thomes Lean
                                </p>
                                <p class="text-sm text-gray-500 truncate">
                                  <a
                                    href="/cdn-cgi/l/email-protection"
                                    class="__cf_email__"
                                    data-cfemail="284d45494144685f41464c5b5c4d5a064b4745"
                                  >
                                    [email&#160;protected]
                                  </a>
                                </p>
                              </div>
                              <div class="inline-flex items-center text-base font-semibold text-gray-900">
                                ₹2367
                              </div>
                            </div>
                          </li>
                          <li class="pt-3 sm:pt-4 pb-0">
                            <div class="flex items-center space-x-4">
                              <div class="flex-shrink-0">
                                <img
                                  class="h-8 w-8 rounded-full"
                                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                                  alt="Neil image"
                                />
                              </div>
                              <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium text-gray-900 truncate">
                                  Lana Byrd
                                </p>
                                <p class="text-sm text-gray-500 truncate">
                                  <a
                                    href="/cdn-cgi/l/email-protection"
                                    class="__cf_email__"
                                    data-cfemail="a2c7cfc3cbcee2d5cbccc6d1d6c7d08cc1cdcf"
                                  >
                                    [email&#160;protected]
                                  </a>
                                </p>
                              </div>
                              <div class="inline-flex items-center text-base font-semibold text-gray-900">
                                ₹367
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                      <h3 class="text-xl leading-none font-bold text-gray-900 mb-10">
                        Acquisition Overview
                      </h3>
                      <div class="block w-full overflow-x-auto">
                        <table class="items-center w-full bg-transparent border-collapse">
                          <thead>
                            <tr>
                              <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                                Top Channels
                              </th>
                              <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                                Users
                              </th>
                              <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"></th>
                            </tr>
                          </thead>
                          <tbody class="divide-y divide-gray-100">
                            <tr class="text-gray-500">
                              <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                                Organic Search
                              </th>
                              <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                                5,649
                              </td>
                              <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                <div class="flex items-center">
                                  <span class="mr-2 text-xs font-medium">
                                    30%
                                  </span>
                                  <div class="relative w-full">
                                    <div class="w-full bg-gray-200 rounded-sm h-2">
                                      <div
                                        class="bg-cyan-600 h-2 rounded-sm"
                                        style={{ width: "30%" }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr class="text-gray-500">
                              <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                                Referral
                              </th>
                              <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                                4,025
                              </td>
                              <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                <div class="flex items-center">
                                  <span class="mr-2 text-xs font-medium">
                                    24%
                                  </span>
                                  <div class="relative w-full">
                                    <div class="w-full bg-gray-200 rounded-sm h-2">
                                      <div
                                        class="bg-orange-300 h-2 rounded-sm"
                                        style={{ width: " 24%" }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr class="text-gray-500">
                              <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                                Direct
                              </th>
                              <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                                3,105
                              </td>
                              <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                <div class="flex items-center">
                                  <span class="mr-2 text-xs font-medium">
                                    18%
                                  </span>
                                  <div class="relative w-full">
                                    <div class="w-full bg-gray-200 rounded-sm h-2">
                                      <div
                                        class="bg-teal-400 h-2 rounded-sm"
                                        style={{ width: "18%" }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr class="text-gray-500">
                              <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                                Social
                              </th>
                              <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                                1251
                              </td>
                              <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                <div class="flex items-center">
                                  <span class="mr-2 text-xs font-medium">
                                    12%
                                  </span>
                                  <div class="relative w-full">
                                    <div class="w-full bg-gray-200 rounded-sm h-2">
                                      <div
                                        class="bg-pink-600 h-2 rounded-sm"
                                        style={{ width: "12%" }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr class="text-gray-500">
                              <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                                Other
                              </th>
                              <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                                734
                              </td>
                              <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                <div class="flex items-center">
                                  <span class="mr-2 text-xs font-medium">
                                    9%
                                  </span>
                                  <div class="relative w-full">
                                    <div class="w-full bg-gray-200 rounded-sm h-2">
                                      <div
                                        class="bg-indigo-600 h-2 rounded-sm"
                                        style={{ width: "9%" }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr class="text-gray-500">
                              <th class="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left">
                                Email
                              </th>
                              <td class="border-t-0 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 pb-0">
                                456
                              </td>
                              <td class="border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0">
                                <div class="flex items-center">
                                  <span class="mr-2 text-xs font-medium">
                                    7%
                                  </span>
                                  <div class="relative w-full">
                                    <div class="w-full bg-gray-200 rounded-sm h-2">
                                      <div
                                        class="bg-purple-500 h-2 rounded-sm"
                                        style={{ width: "7%" }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
              <footer class="bg-white md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4">
                <ul class="flex items-center flex-wrap mb-6 md:mb-0">
                  <li>
                    <a
                      href="#"
                      class="text-sm font-normal text-gray-500 hover:underline"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                <div class="flex sm:justify-center space-x-6">
                  <a href="#" class="text-gray-500 hover:text-gray-900">
                    <svg
                      class="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" class="text-gray-500 hover:text-gray-900">
                    <svg
                      class="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" class="text-gray-500 hover:text-gray-900">
                    <svg
                      class="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" class="text-gray-500 hover:text-gray-900">
                    <svg
                      class="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </footer>
              <p class="text-center text-sm text-gray-500 my-10">
                &copy; 2023{" "}
                <a href="#" class="hover:underline" target="_blank">
                  AyurVedaMart
                </a>
                . All rights reserved.
              </p>
            </div>
            <script
              async
              defer
              src="https://buttons.github.io/buttons.js"
            ></script>
            <script src="https://demo.themesberg.com/windster/app.bundle.js"></script>
          </div>
        </>
      )}
    </div>
  );
}
