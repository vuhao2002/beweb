const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
// vd: pointName: điểm giao dịch
// vd: pointAddress: vị trí cụ thể
// vd: pointProvince: Hà Nội
var orderSchema = new mongoose.Schema(
  {
    createBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    senderInfo: {
      type: String,
    },
    senderName: {
      type: String,
      required: true,
    },
    senderNumber: {
      type: String,
      required: true,
    },
    senderProvince: {
      type: String,
      required: true,
    },
    senderAddress: {
      type: String,
      required: true,
    },
    recipientName: {
      type: String,
      required: true,
    },
    recipientNumber: {
      type: String,
      required: true,
    },
    recipientProvince: {
      type: String,
      required: true,
    },
    recipientWard: {
      type: String,
      required: true,
    },
    recipientAddress: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    productWeight: {
      type: String,
      required: true,
    },
    productQuantity: {
      type: Number,
      required: true,
    },
    productSizeLength: {
      type: Number,
    },
    productSizeWidth: {
      type: Number,
    },
    productSizeHeight: {
      type: Number,
    },
    productNote: {
      type: String,
    },
    productTotal: {
      type: String,
    },
    orderLocation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Point",
    },
    orderStatus: {
      type: String,
      default: "Chờ lấy hàng",
      enum: [
        "Chờ lấy hàng",
        "Đã lấy hàng",
        "Đang vận chuyển",
        "Chờ phát",
        "Phát thành công",
        "Phát không thành công",
        "Chờ chuyển hoàn",
        "Chuyển hoàn",
        "Phát hoàn thành công",
        "Chuyển tiếp",
        "Vô thừa nhận",
        "Đơn hàng hủy",
        "Bồi thường",
      ],
    },
    serviceTrans: {
      type: String,
      enum: [
        "Chuyển phát nhanh MP - Tài liệu",
        "Chuyển phát nhanh MP - Hàng hóa",
      ],
    },
    serviceExtra: {
      type: String,
      enum: [
        "Giao hàng thu tiền",
        "Thu thập hồ sơ và báo phát hình ảnh",
        "Thu hộ phí ship hàng",
        "Thu hộ phí hủy đơn hàng",
      ],
    },
    serviceLetCusSee: {
      type: Boolean,
      default: false,
    },
    serviceFragile: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Order", orderSchema);
